import { Container, Eyebrow, Cta } from "./ui";
import { SITE } from "@/app/data/site";
import heroGold from "@/public/assets/hero/gold-hero.webp";
import { Check } from "lucide-react";
import Image from "next/image";


export function Hero() {
    return (
        <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink">
            <Image
                src={heroGold.src}
                alt="Polished gold bars and fine gold chains on warm travertine stone"
                width={1600}
                height={1072}
                sizes="100vw"
                priority={true}
                fetchPriority="high"
                className="absolute inset-0 -z-10 size-full object-cover"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
            />
            <Container className="py-16 sm:py-24 lg:py-32">
                <div className="max-w-xl lg:max-w-2xl">
                    <Eyebrow className="text-white/80">New York · West 47th Street</Eyebrow>
                    <h1
                        id="hero-title"
                        className="mt-4 text-pretty text-[2rem] leading-[1.15] font-semibold text-white sm:text-[2.75rem] lg:text-5xl"
                    >
                        Sell your gold at live spot-based prices, paid the same day.
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
                        Jewelry, bullion, coins and scrap tested and weighed in front of you at our 47th Street
                        refinery. We also buy diamonds and luxury watches. No pressure, no obligation.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Cta href={SITE.offerUrl}>Get a Free Offer</Cta>
                        <Cta href={SITE.phoneHref} variant="light">
                            Call {SITE.phone}
                        </Cta>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">

                        <li className="flex items-center gap-2">
                            <Check aria-hidden="true" className="size-4 text-white" />
                            Live spot pricing
                        </li>
                        <li className="flex items-center gap-2">
                            <Check aria-hidden="true" className="size-4 text-white" />
                            Free valuation
                        </li>
                        <li className="flex items-center gap-2">
                            <Check aria-hidden="true" className="size-4 text-white" />
                            No obligation
                        </li>

                    </ul>
                </div>
            </Container>
        </section>
    )
}