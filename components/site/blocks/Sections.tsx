import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export function Section({
    children,
    className,
    tone = "ivory",
    id,
    as: As = "section",
    labelledBy,
}: {
    children: ReactNode;
    className?: string;
    tone?: "ivory" | "stone" | "white" | "ink" | "light" | "quote";
    id?: string;
    as?: "section" | "div" | "aside";
    labelledBy?: string;
}) {
    const tones = {
        ivory: "bg-background text-foreground",
        stone: "bg-surface-grey text-foreground",
        light: "bg-surface-light text-foreground",
        quote: "bg-surface-quote text-foreground",
        white: "bg-card text-foreground",
        ink: "bg-ink text-white",
    } as const;
    return (
        <As id={id} aria-labelledby={labelledBy} className={cn("py-14 sm:py-20", tones[tone], className)}>
            {children}
        </As>
    );
}