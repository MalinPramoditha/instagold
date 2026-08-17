"use client"
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";



function useReveal() {
    const ref = useRef<HTMLLIElement | null>(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setShown(true);
            return;
        }
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
    return { ref, shown };
}

export default function BlogArticalCard({ article, index }: { article: any; index: number }) {
    const { ref, shown } = useReveal();
    return (
        <li
            ref={ref}
            style={{ transitionDelay: `${Math.min(index, 5) * 60}ms` }}
            className={cn(
                "panel-soft flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-card transition-all duration-500 ease-out",
                "hover:-translate-y-1 hover:border-link",
                shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
        >
            <a href={`/blog/${article.slug.current}`} className="group flex h-full flex-col">
                <div className="aspect-[16/9] w-full overflow-hidden bg-surface-light">
                    <img
                        src={article.imageUrl}
                        alt={article.alt}
                        width={1024}
                        height={576}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="flex flex-col p-4 pb-2.5">
                    <span className="eyebrow">{article.category}</span>
                    <h3 className="mt-2 text-base leading-tight text-foreground">{article.title}</h3>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-link">
                        Read more
                        <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                </div>
            </a>
        </li>
    );
}