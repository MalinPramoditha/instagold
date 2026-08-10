"use client"
import { SITE } from "@/app/data/site";
import { TESTIMONIALS } from "@/app/data/testimonials";
import { Container, Section } from "@/components/site/ui";
import { Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials({
    tone = "quote",
    limit = 3,
}: {
    tone?: "white" | "ivory" | "stone" | "quote";
    limit?: number;
}) {
    return (
        <Section tone={tone} labelledBy="reviews-title">
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2 id="reviews-title" className="text-2xl leading-tight sm:text-3xl">
                        What our clients say
                    </h2>

                </div>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper">


                        {TESTIMONIALS.map((t) => (
                            <SwiperSlide>
                                <div key={t.name} className="panel-soft rounded-xl border border-hairline bg-card p-6">
                                    <div className="flex gap-0.5 py-2">
                                        <Star className="size-4 text-brand" />
                                        <Star className="size-4 text-brand" />
                                        <Star className="size-4 text-brand" />
                                        <Star className="size-4 text-brand" />
                                        <StarHalf className="size-4 text-brand" />
                                    </div>
                                    <p className="text-base leading-relaxed text-foreground">“{t.quote}”</p>
                                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                                        {t.name}
                                        {t.item ? ` · ${t.item}` : ""}
                                    </p>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </Container>
        </Section>
    );
}