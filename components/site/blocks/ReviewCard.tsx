import { Quote, Star, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils"

export default function ReviewCard({ data }: { data: any }) {
    const { quote, name, category } = data;
    return (
        <div
            className={cn(
                "panel-soft flex h-full flex-col rounded-xl border border-hairline bg-card p-6 transition-all duration-500 ease-out mt-2",
                "hover:-translate-y-1 hover:border-link",
            )}
        >
            <Quote aria-hidden="true" className="size-5 text-accent-soft" />
            <div className="mt-4">
                <div className="flex items-center gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} aria-hidden="true" className="size-4 fill-brand text-brand" />
                    ))}
                </div>
            </div>
            <p className="mt-4 grow text-base leading-relaxed text-foreground">{quote}</p>
            <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-muted-foreground">{name}</p>
                {data.category && (
                    <span className="rounded-full border border-hairline px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {category}
                    </span>
                )}
            </div>
        </div>
    )
}
