import { Container } from "./ui";
import { TRUST_POINTS } from "@/app/data/site";
import { cn } from "@/lib/utils";

export function TrustStrip() {
    return (
        <div className="border-y border-hairline bg-surface-light">
            <Container>
                <ul className="grid grid-cols-2 text-sm font-medium text-foreground sm:grid-cols-4">
                    {TRUST_POINTS.map((t, i) => (
                        <li
                            key={t.label}
                            className={cn(
                                "flex items-center justify-center gap-2 px-4 py-5 text-center",
                                i > 0 && "sm:border-l sm:border-hairline",
                                i === 1 && "border-l border-hairline sm:border-l",
                                i >= 2 && "border-t border-hairline sm:border-t-0",
                                i === 3 && "border-l border-hairline",
                            )}
                        >
                            <span aria-hidden="true" className="block size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            <span className="text-balance">{t.label}</span>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}