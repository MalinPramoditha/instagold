import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[78rem] px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "ivory",
  id,
  as: As = "section",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "stone" | "white" | "ink" | "light" | "quote";
  id?: string;
  as?: "section" | "div" | "aside";
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-background text-foreground",
    stone: "bg-surface-grey text-foreground",
    light: "bg-surface-light text-foreground",
    quote: "bg-surface-quote text-foreground",
    white: "bg-card text-foreground",
    ink: "bg-ink text-white",
  } as const;
  return (
    <As id={id} aria-labelledby={labelledBy} className={cn("py-14 sm:py-20", tones[tone], className)}>
      {children}
    </As>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet" | "light";
  className?: string;
  onClick?: () => void;
};

const ctaBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200";

export function Cta({ href, children, variant = "solid", className, onClick }: CtaProps) {
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

export function Hairline({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-hairline", className)} />;
}

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-hairline bg-card px-5 py-1 sm:px-8 sm:py-2", className)}>
      {items.map((item) => (
        <details key={item.q} className="group border-b border-hairline last:border-b-0">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left">
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">{item.q}</h3>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-link transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="measure pb-6 text-base leading-relaxed text-muted-foreground">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-link bg-card px-6 py-5">
      <p className="eyebrow mb-2">Key takeaway</p>
      <p className="text-base leading-relaxed text-foreground">{children}</p>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-t border-b border-hairline py-8 font-display text-2xl leading-snug text-foreground sm:text-3xl">
      {children}
    </blockquote>
  );
}