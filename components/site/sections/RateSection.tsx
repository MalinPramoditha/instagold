"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Container } from "../ui";
import { ArrowUp, ArrowDown, Minus, TrendingUp, TrendingDown } from "lucide-react";

export function RateSection() {
    const [rates, setRates] = useState<any[]>([]);
    const [prevPrices, setPrevPrices] = useState<Record<string, number>>({});

    useEffect(() => {
        async function fetchLivePrices() {
            try {
                const [goldRes, silverRes, platinumRes] = await Promise.all([
                    fetch('https://api.gold-api.com/price/XAU/USD'),
                    fetch('https://api.gold-api.com/price/XAG/USD'),
                    fetch('https://api.gold-api.com/price/XPT/USD')
                ]);

                const gold = await goldRes.json();
                const silver = await silverRes.json();
                const platinum = await platinumRes.json();

                const newRates = [gold, silver, platinum];

                setRates((currentRates) => {
                    if (currentRates.length > 0) {
                        const oldMap: Record<string, number> = {};
                        currentRates.forEach((r: any) => {
                            oldMap[r.symbol || r.metal] = Number(r.price);
                        });
                        setPrevPrices(oldMap);
                    }
                    return newRates;
                });
            } catch (error) {
                console.error("Failed to fetch live rates:", error);
            }
        }

        fetchLivePrices();
        const interval = setInterval(fetchLivePrices, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-y border-hairline bg-surface-light">
            <Container>
                <ul className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {rates.map((rate: any) => {
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
                                            duration={1.5}
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