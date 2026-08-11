"use client"

import { useRef, useState, useEffect } from "react";
import {
    Coins,
    Crown,
    Diamond,
    Gem,
    Landmark,
    Layers,
    Recycle,
    Sparkles,
    Utensils,
    Watch,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP = {
    Coins,
    Crown,
    Diamond,
    Gem,
    Landmark,
    Layers,
    Recycle,
    Sparkles,
    Utensils,
    Watch,
} as const;

export type IconName = keyof typeof ICON_MAP;

export interface CategoryCardProps {
    card: {
        name: string;
        descriptor: string;
        href: string;
        alt: string;
        icon: IconName;
    };
    index: number;
}

export function CategoryCard({ card, index }: CategoryCardProps) {
    const ref = useRef<HTMLLIElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        io.observe(node);
        return () => io.disconnect();
    }, []);

    const IconComponent = ICON_MAP[card.icon] || Gem;

    return (
        <li
            ref={ref}
            style={{ transitionDelay: `${Math.min(index, 11) * 50}ms` }}
            className={cn(
                "panel-soft flex h-full flex-col rounded-xl border border-hairline bg-card p-6 transition-all duration-500 ease-out",
                "hover:-translate-y-1 hover:border-link",
                shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
        >
            <a href={card.href} className="group flex h-full flex-col">
                <span className="inline-grid size-12 place-items-center rounded-full bg-accent-soft">
                    <IconComponent aria-hidden="true" aria-label={card.alt} className="size-6 text-link" />
                </span>
                <h2 className="mt-5 text-lg leading-tight text-foreground">{card.name}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{card.descriptor}</p>
                <span className="mt-auto pt-5 text-sm font-medium text-link">
                    Learn more
                </span>
            </a>
        </li>
    );
}