"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Container } from "../ui";
import { ArrowUp, ArrowDown, Minus, TrendingUp, TrendingDown } from "lucide-react";

const ENDPOINTS = [
    { key: "XAU", url: 'https://api.gold-api.com/price/XAU/USD' },
    { key: "XAG", url: 'https://api.gold-api.com/price/XAG/USD' },
    { key: "XPT", url: 'https://api.gold-api.com/price/XPT/USD' }
];

export function RateSection() {
    const [rates, setRates] = useState<Record<string, any>>({});
    const [prevPrices, setPrevPrices] = useState<Record<string, number>>({});

    useEffect(() => {
        let isMounted = true;
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;

        // 1. Fetch all three immediately so the UI is fully populated right away
        async function fetchInitialAll() {
            try {
                const results = await Promise.all(
                    ENDPOINTS.map(async (ep) => {
                        const res = await fetch(ep.url);
                        return res.json();
                    })
                );

                if (isMounted) {
                    const initialMap: Record<string, any> = {};
                    results.forEach((data) => {
                        const key = data.symbol || data.metal;
                        initialMap[key] = data;
                    });
                    setRates(initialMap);
                }
            } catch (error) {
                console.error("Failed to fetch initial rates:", error);
            }

            // Start the rolling staggered updates after the initial load
            scheduleNextFetch();
        }

        // 2. Fetch one metal at a time on a rotating schedule
        async function fetchSingleRate() {
            if (document.hidden || !isMounted) return;

            const endpoint = ENDPOINTS[currentIndex];

            try {
                const res = await fetch(endpoint.url);
                const data = await res.json();

                if (isMounted) {
                    const key = data.symbol || data.metal || endpoint.key;

                    setRates((currentRates) => {
                        // Save previous price for this specific metal before updating
                        if (currentRates[key]) {
                            setPrevPrices((prev) => ({
                                ...prev,
                                [key]: Number(currentRates[key].price)
                            }));
                        }

                        return {
                            ...currentRates,
                            [key]: data
                        };
                    });
                }
            } catch (error) {
                console.error(`Failed to fetch ${endpoint.key}:`, error);
            }

            // Move to the next metal index, looping back to 0
            currentIndex = (currentIndex + 1) % ENDPOINTS.length;

            scheduleNextFetch();
        }

        function scheduleNextFetch() {
            if (isMounted) {
                // Fetch the next single metal every 10 seconds
                timeoutId = setTimeout(fetchSingleRate, 10000);
            }
        }

        // Trigger the initial batch load on mount
        fetchInitialAll();

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);

    const ratesArray = Object.values(rates);

    return (
        <div className="border-y border-hairline bg-surface-light">
            <Container>
                <ul className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {ratesArray.map((rate: any) => {
                        const key = rate.symbol || rate.metal;
                        const currentPrice = Number(rate.price);
                        const prevPrice = prevPrices[key] ?? currentPrice;

                        const isUp = currentPrice > prevPrice;
                        const isDown = currentPrice < prevPrice;

                        return (
                            <li key={key} className="px-4 py-5 text-center">
                                <p className="eyebrow mt-1">{rate.name || key}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <h2 className="text-2xl font-bold flex items-center gap-1">
                                        <span>{rate.currencySymbol || "$"}</span>
                                        <CountUp
                                            start={prevPrice}
                                            end={currentPrice}
                                            decimals={2}
                                            duration={1.0}
                                            preserveValue
                                        />
                                    </h2>
                                    {isUp && <TrendingUp className="size-5 text-green-600" />}
                                    {isDown && <TrendingDown className="size-5 text-red-600" />}
                                    {!isUp && !isDown && <Minus className="size-4 text-muted-foreground" />}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">Priced at today's live spot rate</p>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </div>
    );
}