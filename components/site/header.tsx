"use client"
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/site/ui";
import { cn } from "@/app/lib/utils";
import { BrandMark } from "@/components/site/Logo";
import { NAV, SITE } from "@/app/data/site";

function Logo({ className }: { className?: string }) {
    return (
        <a
            href="/"
            className={cn("inline-flex w-fit items-center justify-self-start leading-none", className)}
            aria-label="InstaGold home"
        >
            <BrandMark />
        </a>
    );
}

export function UtilityBar() {
    return (
        <div className="hidden border-b border-hairline bg-stone text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground md:block">
            <Container className="flex h-9 items-center justify-between">
                <a href={SITE.phoneHref} className="rule-link hover:text-foreground">
                    Call us on {SITE.phone}
                </a>
                <div className="flex items-center gap-8">
                    <span>Live Spot-Price Gold Buyers</span>
                    <a href={SITE.mapsUrl} className="rule-link hover:text-foreground">
                        31 W 47th Street, New York
                    </a>
                </div>
            </Container>
        </div>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const mega = NAV[0]!;

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
            <UtilityBar />
            <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:py-5">
                <Logo className="min-w-0" />

                <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
                    <div
                        className="relative"
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                    >
                        <a
                            href={mega.href}
                            aria-expanded={megaOpen}
                            onFocus={() => setMegaOpen(true)}
                            className="flex min-h-11 items-center gap-1 text-[0.78rem] uppercase tracking-[0.14em] text-foreground hover:text-champagne-deep"
                        >
                            {mega.label}
                            <ChevronDown aria-hidden="true" className="size-3.5" />
                        </a>
                        {megaOpen && mega.columns ? (
                            <div className="absolute left-1/2 top-full w-[46rem] -translate-x-1/2 border border-hairline bg-card p-8 shadow-[0_18px_40px_-30px_oklch(0.2_0.01_60/0.5)]">
                                <div className="grid grid-cols-3 gap-8">
                                    {mega.columns.map((col) => (
                                        <div key={col.heading}>
                                            <p className="eyebrow mb-4">{col.heading}</p>
                                            <ul className="space-y-2.5">
                                                {col.links.map((l) => (
                                                    <li key={l.label + l.href}>
                                                        <a
                                                            href={l.href}
                                                            className="rule-link text-[0.92rem] text-foreground hover:text-champagne-deep"
                                                        >
                                                            {l.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    {NAV.slice(1).map((item) => (
                        <a
                            key={item.href + item.label}
                            href={item.href}
                            className="flex min-h-11 items-center text-[0.78rem] uppercase tracking-[0.14em] text-foreground hover:text-champagne-deep"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={SITE.offerUrl}
                        className="inline-flex min-h-11 rounded-md items-center bg-ink px-5 text-[0.75rem] uppercase tracking-[0.16em] text-[oklch(0.97_0.008_85)] transition-colors hover:bg-champagne-deep"
                    >
                        Get a Free Offer
                    </a>
                </nav>

                <div className="flex items-center gap-1 lg:hidden">
                    <a
                        href={SITE.phoneHref}
                        aria-label={`Call InstaGold on ${SITE.phone}`}
                        className="grid size-11 place-items-center text-foreground"
                    >
                        <Phone aria-hidden="true" className="size-5" />
                    </a>
                    <a
                        href={SITE.offerUrl}
                        className="inline-flex min-h-11 items-center bg-ink px-4 text-[0.7rem] uppercase tracking-[0.14em] text-[oklch(0.97_0.008_85)]"
                    >
                        Get an Offer
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={open}
                        className="grid size-11 place-items-center text-foreground"
                    >
                        <Menu aria-hidden="true" className="size-6" />
                    </button>
                </div>
            </Container>

            {open ? (
                <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
                    <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
                        <Logo />
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="grid size-11 place-items-center"
                        >
                            <X aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
                        <ul className="divide-y divide-hairline">
                            {NAV.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="flex min-h-14 items-center font-display text-2xl text-foreground"
                                    >
                                        {item.label}
                                    </a>
                                    {item.columns ? (
                                        <ul className="-mt-1 mb-4 grid grid-cols-2 gap-x-4 gap-y-2">
                                            {item.columns.flatMap((c) => c.links).map((l) => (
                                                <li key={l.label + l.href}>
                                                    <a href={l.href} className="block py-1.5 text-sm text-muted-foreground">
                                                        {l.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 space-y-3">
                            <a
                                href={SITE.offerUrl}
                                className="flex min-h-12 items-center justify-center bg-ink text-[0.78rem] uppercase tracking-[0.16em] text-[oklch(0.97_0.008_85)]"
                            >
                                Get a Free Offer
                            </a>
                            <a
                                href={SITE.phoneHref}
                                className="flex min-h-12 items-center justify-center border border-ink/30 text-[0.78rem] uppercase tracking-[0.16em]"
                            >
                                Call {SITE.phone}
                            </a>
                        </div>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
