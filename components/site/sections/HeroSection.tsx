import { Container, Eyebrow, Cta } from "../ui";
import { SITE } from "@/app/data/site";
import heroGold from "@/public/assets/hero-gold-refined.jpg";
import { Check } from "lucide-react";
import { CTA } from "../blocks";


export function HeroSection({ data }: { data: any }) {
    return (
        <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink">
            <img
                src={`/assets/${data.image.title}.jpg`}
                alt={data.image.alt}
                width={1600}
                height={1072}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
            />
            <Container className="py-16 sm:py-24 lg:py-32">
                <div className="max-w-xl lg:max-w-2xl">
                    <Eyebrow className="text-white/80">{data.eyebrow}</Eyebrow>
                    <h1
                        id="hero-title"
                        className="mt-4 text-pretty text-[2rem] leading-[1.15] font-semibold text-white sm:text-[2.75rem] lg:text-5xl"
                    >
                        {data.title}
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
                        {data.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <CTA href={SITE.offerUrl}>Get a Free Offer</CTA>
                        <CTA href={SITE.phoneHref} variant="light">
                            Call {SITE.phone}
                        </CTA>
                    </div>
                    {/* <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">
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

                    </ul> */}
                </div>
            </Container>
        </section>
    )
}