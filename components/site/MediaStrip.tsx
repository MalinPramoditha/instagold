import { Container, Section } from "./ui";
import { MEDIA } from "@/app/data/site";

export function MediaStrip() {
    return (
        <Section tone="ivory" className="py-10 sm:py-12" labelledBy="featured-on">
            <Container>
                <h2 id="featured-on" className="eyebrow text-center">
                    Featured on
                </h2>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-y-4 lg:w-5xl w-full mx-auto">
                    <img src="/assets/media/cnn.png" alt="cnn" className="h-10" />
                    <img src="/assets/media/wsj.png" alt="wsj" className="h-10" />
                    <img src="/assets/media/cnbc.png" alt="cnbc" className="h-10" />
                    <img src="/assets/media/bloomberg.png" alt="bloomberg" className="h-10" />
                    <img src="/assets/media/yahoo.png" alt="yahoo" className="h-10" />
                    <img src="/assets/media/investing.png" alt="investing" className="h-10" />

                </div>
                <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-balance text-muted-foreground">
                    Every valuation takes place in our secure West 47th Street office, one to one, with full
                    confidentiality and no obligation to sell.
                </p>
            </Container>
        </Section>
    );
}