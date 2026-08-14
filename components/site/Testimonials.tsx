"use client"
import { SITE } from "@/app/data/site";
import { Container, Section } from "@/components/site/ui";
import { Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReviewCard } from "./blocks/ReviewCard";


export function Testimonials({
    data,
    tone = "quote",
    limit = 3,
}: {
    data: any,
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
                    <a
                        href={SITE.reviewsUrl}
                        className="font-medium text-foreground underline decoration-2 underline-offset-4 decoration-accent-soft hover:decoration-link"
                    >
                        Read more reviews
                    </a>

                </div>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
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


                        {data.map((t: any) => (
                            <SwiperSlide><ReviewCard data={t} /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </Section>
    );
}