import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaProps = {
    href: string;
    children: ReactNode;
    variant?: "solid" | "outline" | "quiet" | "light";
    className?: string;
    onClick?: () => void;
};

const ctaBase =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200";

export function CTA({ href, children, variant = "solid", className, onClick }: CtaProps) {
    const variants = {
        solid: "bg-brand text-ink hover:bg-brand-hover",
        outline: "border border-link bg-transparent text-link hover:bg-surface-light",
        light: "border border-white/40 text-white hover:bg-white/10",
        quiet: "px-0 font-medium text-foreground underline decoration-2 underline-offset-4 decoration-accent-soft hover:decoration-link",
    } as const;
    return (
        <a href={href} onClick={onClick} className={cn(ctaBase, variants[variant], className)}>
            {children}
        </a>
    );
}