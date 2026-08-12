"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/app/data/site";
import { Container } from "@/components/site/ui";
import { BrandMark } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const NEIGHBORHOODS = [
  "Tribeca",
  "Financial District",
  "Chelsea",
  "SoHo",
  "Flatiron District",
  "West Village",
  "NoMad",
  "Upper West Side",
  "Murray Hill",
  "Gramercy",
  "Hudson Yards",
  "Lincoln Square",
  "DUMBO",
  "Brooklyn Heights",
  "Park Slope",
  "Long Island City",
  "Hoboken",
  "Downtown Jersey City",
  "Midtown East",
  "Upper East Side",
];

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const LOCALITY_GROUPS = [
  { title: "Sell Gold by Neighborhood", base: "/cash-for-gold-nyc/" },
  { title: "Sell Gold Coins by Neighborhood", base: "/gold-coin-buyers-nyc/" },
  { title: "Sell Rolex by Neighborhood", base: "/sell-rolex-nyc/" },
  { title: "Sell Audemars Piguet by Neighborhood", base: "/sell-audemars-piguet-nyc/" },
  { title: "Sell Cartier by Neighborhood", base: "/sell-cartier-nyc/" },
];


const WHAT_WE_BUY = [
  { label: "Gold & Bullion", href: "/cash-for-gold-nyc" },
  { label: "Gold Coins", href: "/gold-coin-buyers-nyc" },
  { label: "Diamonds", href: "/sell-diamonds-nyc" },
  { label: "Fine Jewelry", href: "/sell-jewelry-for-cash-nyc" },
  { label: "Luxury Watches", href: "/sell-used-watch-nyc" },
  { label: "All Categories", href: "/what-we-buy" },
];

const BRANDS = [
  { label: "Rolex", href: "/what-we-buy/watch-buyers-nyc/rolex-watch-buyers" },
  { label: "Patek Philippe", href: "/what-we-buy/watch-buyers-nyc/patek-phillipe-watch-buyers" },
  { label: "Audemars Piguet", href: "/what-we-buy/watch-buyers-nyc/audemars-piguet-watch-buyers" },
  { label: "Cartier", href: "/what-we-buy/watch-buyers-nyc/cartier-watch-buyers" },
  { label: "Richard Mille", href: "/what-we-buy/watch-buyers-nyc/richard-mille-watch-buyers" },
  { label: "Jaeger-LeCoultre", href: "/what-we-buy/watch-buyers-nyc/jaeger-lecoultre-watch-buyers" },
  { label: "Panerai", href: "/what-we-buy/watch-buyers-nyc/panerai-watch-buyers" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink text-[oklch(0.9_0.008_85)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm text-left">
            <BrandMark tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.01_80)]">
              A New York gold buyer and refinery in the Diamond District. We pay live spot-based prices for
              gold, bullion, coins and precious metals, and also buy diamonds and luxury watches — with
              transparent testing and private, confidential transactions.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[oklch(0.78_0.01_80)]">
              <a href={SITE.mapsUrl} className="rule-link block">
                {SITE.address.street}
                <br />
                {SITE.address.locality}, {SITE.address.region} {SITE.address.postal}
              </a>
              <a href={SITE.phoneHref} className="rule-link mt-2 inline-block">
                {SITE.phone}
              </a>
            </address>
          </div>

          <FooterCol title="What We Buy" links={WHAT_WE_BUY} />
          <FooterCol title="Watch Brands" links={BRANDS} />
          <FooterCol title="Company" links={[...COMPANY, ...LEGAL]} />
        </div>

        <section
          aria-label="Areas we serve"
          className="mt-12 border-t border-[oklch(1_0_0/0.14)] pt-8"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-champagne">Areas We Serve</p>
          <div className="mt-5 divide-y divide-[oklch(1_0_0/0.12)] border-y border-[oklch(1_0_0/0.12)]">
            {LOCALITY_GROUPS.map((g) => (
              <LocalityGroup key={g.base} title={g.title} base={g.base} />
            ))}
          </div>
        </section>




        <div className="mt-12 flex flex-col gap-4 border-t border-[oklch(1_0_0/0.14)] pt-8 text-xs text-[oklch(0.72_0.01_80)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} InstaGold Buyers Refinery All rights reserved.</p>
          <ul className="flex gap-5">
            <li>
              <a href="https://www.facebook.com/" className="rule-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="rule-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=VhSgR3_HpUs" className="rule-link">
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[oklch(0.65_0.01_80)]">
          InstaGold Buyers Refinery is an independent dealer and is not affiliated with, sponsored by or
          endorsed by Rolex or any other watch or jewelry manufacturer named on this website. All brand
          names and trademarks are the property of their respective owners.
        </p>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-champagne">{title}</p>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <a href={l.href} className="text-sm text-[oklch(0.8_0.01_80)] hover:text-[oklch(0.97_0.008_85)]">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function LocalityGroup({ title, base }: { title: string; base: string }) {
  const [open, setOpen] = useState(false);
  const id = `locality-${base.replace(/\//g, "")}`;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full min-h-12 items-center justify-between gap-4 py-3 text-left text-sm text-[oklch(0.86_0.01_80)] hover:text-[oklch(0.97_0.008_85)]"
      >
        <span>{title}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        id={id}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 pb-5 sm:grid-cols-3 lg:grid-cols-5">
            {NEIGHBORHOODS.map((n) => (
              <li key={n}>
                <a
                  href={`${base}${slugify(n)}`}
                  tabIndex={open ? 0 : -1}
                  className="block py-1.5 text-sm text-[oklch(0.8_0.01_80)] hover:text-[oklch(0.97_0.008_85)]"
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
