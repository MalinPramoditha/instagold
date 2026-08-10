import { Container, Cta, Eyebrow, KeyTakeaway, PullQuote, Section } from "./ui";
import { SITE, SERVICE_AREAS } from "@/app/data/site";
import watchFeature from "@/public/assets/watch-feature.jpg";

const SECTIONS = [
  { id: "guide-intro", label: "Selling a Rolex: where to start" },
  { id: "guide-why-us", label: "Why choose InstaGold" },
  { id: "guide-models", label: "Rolex models we purchase" },
  { id: "guide-value", label: "What impacts the value" },
  { id: "guide-areas", label: "Cities we serve" },
  { id: "guide-nyc", label: "Why we are NYC’s #1 Rolex buyer" },
  { id: "guide-market", label: "How the Rolex market works" },
  { id: "guide-micro", label: "Micro-guides for specific situations" },
  { id: "guide-options", label: "Comparing selling options in NYC" },
  { id: "guide-prepare", label: "Preparing your Rolex before selling" },
];

function slugify(area: string) {
  return area.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function RolexGuide() {
  return (
    <Section tone="ivory" id="rolex-guide" labelledBy="rolex-guide-title" as="section">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Expert guide</Eyebrow>
          <h2 id="rolex-guide-title" className="mt-4 text-3xl leading-tight sm:text-5xl">
            Expert Guide to Selling a Rolex in New York
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sell your Rolex watch for top dollar with an instant quote. Below, our appraisers set out how
            Rolex valuations actually work in New York — the models we buy, the factors that move a price,
            how the market behaves, and how to prepare your watch before you sell.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Guide contents" className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">In this guide</p>
            <ol className="mt-4 space-y-2.5 border-l border-hairline pl-4 text-sm text-muted-foreground">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="rule-link hover:text-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="measure text-[1rem] leading-[1.75] text-muted-foreground">
            <h3 id="guide-intro" className="scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              1. Sell Your Rolex Watch For Top Dollar – Instant Quote
            </h3>
            <p className="mt-4">
              So you’ve been thinking that it’s high time that you sell Rolex and put that money toward
              something that actually fits your life right now. If that is the case, you’re in the right
              place. InstaGold is a team that’s built its reputation on being the kind of Rolex buyer
              people recommend to their family, friends, and even their coworkers.
            </p>
            <p className="mt-4">
              A lot of folks walk through our doors (or start with an online quote) feeling a little unsure.
              Maybe you’ve had your Rolex for years. It was a gift from someone dear to you or a reward you
              bought for yourself for a milestone that you achieved. Watches carry stories, and we respect
              that. Others just want it sold quickly without the awkward haggling or shady backroom vibes you
              sometimes hear about. We get it. Selling a luxury watch shouldn’t feel like you’re gambling with
              the outcome.
            </p>
            <p className="mt-4">
              That’s why we built a place where people could sell Rolex with confidence. No pushy sales talk
              or rushed decisions. Just a simple, clear process that gives you real numbers and real answers
              from people who actually understand the market, not generic watch buyers who treat every brand
              the same.
            </p>
            <p className="mt-4">
              Our appraisers follow real-time pricing trends, reference numbers, and condition-based factors
              (the things collectors care about but most buyers never mention). While that’s the professional
              side, the human side matters too. Maybe you’ve wondered if the price you saw online is
              realistic. Maybe you’ve been comparing quotes for weeks. Or maybe you’re just tired of that
              watch sitting in the safe, doing nothing. We hear variations of these stories every day.
            </p>
            <p className="mt-4">
              So take a breath. You’re in a place where you can ask questions, get honest answers, and walk
              away with cash in your pocket or your bank balance higher the same day if you’re ready.
            </p>

            <h3 id="guide-why-us" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              2. Why Choose InstaGold to Sell Rolex?
            </h3>
            <p className="mt-4">
              A lot of places claim they’ll give you the “best price,” but once you actually sit down with
              them, the number drops. It should not be this hard to sell Rolex without feeling shortchanged.
              At InstaGold, we’ve built a process that’s simple, fast, and most importantly, fair.
            </p>
            <p className="mt-4">
              One reason people trust us is because we’ve spent over 20 years studying the patterns of the
              Rolex market. Trends come and go. Some models spike because a celebrity wore one, while others
              rise because collectors have rediscovered them. Our appraisers watch all of that. You need that
              level of attention when you’re trying to sell Rolex for the highest possible price.
            </p>
            <p className="mt-4">
              Another reason people choose us is our calm and unintimidating atmosphere. We’re trying to
              create the type of showroom where you don’t feel like you need to whisper. Clients often say it
              feels more like talking to someone who genuinely enjoys this stuff rather than average watch
              buyers rushing to the next deal. You can ask us anything from why a bezel style matters to
              whether a certain reference number is more desirable. We’ll explain it without overloading you
              with jargon.
            </p>
            <PullQuote>
              Odd as it sounds, telling someone not to sell is sometimes what builds trust.
            </PullQuote>
            <p>
              Transparency is something that is very important to us. You’ll see exactly how we arrive at your
              quote, what your model is selling for on the secondary market, and how the demand looks right
              now. We won’t hit you with the “trust me, bro.” We provide clear information that you can decide
              with. If we think waiting a bit could get you a stronger price? We’ll tell you that too.
            </p>
            <p className="mt-4">
              Most clients tell us they walk in expecting a transactional experience, and walk out feeling
              like they learned something valuable, regardless of whether they sold or not. That’s the energy
              we want you to feel, especially if this is your first time trying to sell Rolex and you’re not
              sure where to start.
            </p>

            <h3 id="guide-models" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              3. Rolex Models We Purchase for Top Dollar
            </h3>
            <p className="mt-4">
              We evaluate different Rolex models every day. Some arrive in pristine condition with the box,
              papers, and tags intact, while others show years of wear and tear. It doesn’t matter to us. If
              you’re trying to sell Rolex, we’re ready to take a look at it. Because we follow the market
              closely, we know the value differences between each model and reference family.
            </p>
            <p className="mt-4">
              Below, you’ll find the watches we buy most often. Don’t worry if your model isn’t mentioned.
              Chances are, we still buy it.
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                "Sell Rolex Submariner",
                "Sell Rolex President",
                "Sell Rolex Datejust",
                "Sell Rolex Daytona",
                "Sell Rolex GMT-Master",
                "Sell Rolex Explorer",
                "Sell Rolex Day-Date",
                "Sell Rolex Air-King",
                "Sell Rolex Yacht-Master",
                "Sell Rolex Oyster Perpetual",
                "Sell Rolex Cellini",
              ].map((m) => (
                <li key={m} className="flex gap-3 border-b border-hairline py-2">
                  <span aria-hidden="true" className="mt-2.5 block size-1 shrink-0 bg-accent-soft" />
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-5">
              Sometimes people hesitate to reach out because they think their watch is “too old” or “too
              worn.” Trust us, there’s almost always a market for it, and we’ll walk you through the valuation
              step by step. Plus, if you’re still unsure whether now is the moment to sell Rolex, we can give
              you a quick quote to help you decide.
            </p>

            <figure className="mt-12">
              <img
                src={watchFeature.src}
                alt="Steel luxury wristwatch with a champagne dial photographed on dark stone"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Placeholder imagery — to be replaced with licensed InstaGold photography.
              </figcaption>
            </figure>

            <h3 id="guide-value" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              4. What Impacts the Value When You Sell Rolex?
            </h3>
            <p className="mt-4">
              One of the biggest questions people ask (right after “How much can I get for my Rolex?”) is why
              their watch is worth what it’s worth. It’s a fair question. When you sell Rolex, you deserve to
              know the factors behind the price so everything feels transparent and grounded. So let’s break
              down what really impacts the value of your Rolex:
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">1. Condition</h4>
            <p className="mt-3">
              Condition matters, but not in a scary way. A little wear on the bracelet is totally normal.
              Everyone has scratches on the clasp. Even a worn bezel doesn’t automatically drop your value.
              Where it does matter is when your Rolex has:
            </p>
            <Bullets
              items={[
                "Deep case dents",
                "Overpolished surfaces",
                "Replacement parts",
                "Broken lume markers",
                "Water damage",
              ]}
            />
            <p className="mt-4">
              Some clients walk in apologizing for their watch’s age or wear, and then they’re shocked when
              the value is still high. Keep in mind that Rolex models tend to age better than most luxury
              items. When you sell Rolex, our goal is to evaluate the watch realistically, not nitpick it into
              a lower number.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">2. Box, Papers &amp; Accessories</h4>
            <p className="mt-3">Yes, the box and papers help, but they’re not mandatory by any means. Basically:</p>
            <Bullets
              items={[
                "With boxes and papers, collectors pay more.",
                "Without them, the watch still has strong value.",
              ]}
            />
            <p className="mt-4">
              The paperwork mostly confirms that your watch is original and its ownership history. But even if
              you lost the box and papers, your watch still holds a lot of worth. Plenty of sellers simply
              never saved the boxes, and we understand that. We won’t turn your watch away just because you
              don’t have the documentation saved.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">3. Year of Production &amp; Serial Range</h4>
            <p className="mt-3">Some Rolex production years are sought after because:</p>
            <Bullets
              items={[
                "They mark transitional references",
                "Rolex introduced a new dial or bezel.",
                "Collectors prefer the earlier version.",
                "Certain years had lower production, or they were limited editions.",
              ]}
            />
            <p className="mt-4">
              If you’re trying to sell Rolex, these small details can influence the price of your watch by
              hundreds or sometimes thousands of dollars. We explain this clearly during the appraisal, so
              you’re not left wondering why the price of a 2018 model is different from a 2015 one.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">4. Market Demand Right Now</h4>
            <p className="mt-3">
              The luxury watch market is just like any other market. It’s affected by the current trends, how
              available the model is, whether collectors are interested, and even cultural moments. A
              celebrity wearing a certain model can cause a spike in interest. A discontinued dial can
              suddenly become a popular, in-demand piece.
            </p>
            <p className="mt-4">
              While general watch buyers rarely follow these fluctuations closely, we do. Our quotes are
              accurate and not outdated. If a particular model category is especially hot, we’ll tell you. If
              waiting a little could help you earn more, we’ll say that too. Your trust matters more to us
              than rushing a deal.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">
              5. Rarity (Real Rarity, Not Marketing Rarity)
            </h4>
            <p className="mt-3">Everyone calls their model “rare,” but you need to know that real rarity shows up in:</p>
            <Bullets
              items={[
                "Low-production references",
                "Special dials",
                "Transitional years",
                "Short-lived color variations",
                "Unique configurations",
              ]}
            />
            <p className="mt-4">
              For instance, production for certain Datejust dials stopped, so they became more sought-after
              years later. So if you’re unsure whether your watch has something special, just ask, and we’ll
              check.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">6. Servicing and Modifications</h4>
            <p className="mt-3">
              An official Rolex service is usually helpful, but third-party servicing is not always. To keep
              it in simple terms:
            </p>
            <Bullets
              items={[
                "Factory service with documentation: good.",
                "Aftermarket polishing: sometimes reduces value.",
                "Replacing non-Rolex parts: almost always a price drop.",
                "Modded bezels or diamonds: collectors usually avoid them.",
              ]}
            />
            <KeyTakeaway>
              If you’re planning to sell your Rolex, bring it in as-is. Don’t service or polish it
              preemptively — collectors often prefer the original, unpolished condition, even if it shows a
              bit of age.
            </KeyTakeaway>

            <h4 className="mt-8 font-display text-xl text-foreground">7. Metal Type and Gem Setting</h4>
            <p className="mt-3">
              Full gold and platinum models naturally hold higher value due to material cost and collector
              demand. Factory-set diamonds increase value. But keep in mind that no matter how nice it looks,
              aftermarket diamonds usually lower it. We always point this out gently because a lot of sellers
              genuinely believe aftermarket additions add value. Hate to break it to you, but the market just
              doesn’t see it that way.
            </p>

            <h4 className="mt-8 font-display text-xl text-foreground">8. Your Rolex’s Story</h4>
            <p className="mt-3">
              Yes, you read that right. Sometimes, a story does help. Not in a dramatic “this watch climbed
              Everest” sense, but in a simple, human way. Pieces that were well-loved and well-cared for often
              show that. Some clients bring in watches worn daily for decades. Others bring pieces they never
              connected with. Either way, honesty about the watch’s journey helps us frame its market
              position.
            </p>
            <p className="mt-4">
              When you sell Rolex, we show you the breakdown of all the factors that affect its value so you
              understand the full picture. That way, you feel confident about that final offer.
            </p>

            <GuideCta />

            <h3 id="guide-areas" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              5. Cities We Serve (Get Your Instant Quote Today)
            </h3>
            <p className="mt-4">
              What’s great about InstaGold is how accessible we are. Our team serves clients all across
              New York City, Brooklyn, Queens, and even nearby Jersey City and Hoboken. No matter where you
              are, getting a fair quote or scheduling an appointment is as easy as they come. Here’s a quick
              guide to the areas we serve:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <a
                    href={`/what-we-buy/watch-buyers-nyc/sell-rolex-${slugify(area)}`}
                    className="rule-link block py-1.5 text-sm hover:text-foreground"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              No matter which neighborhood you’re in, our team ensures your watch is handled safely and
              appraised accurately. We’re the kind of watch buyers who understand the value of your timepiece
              and the story behind it. Click on your neighborhood to get an instant quote and see how easy it
              is to turn your Rolex into cash today.
            </p>

            <h3 id="guide-nyc" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              6. Why We Are NYC’s #1 Rolex Buyer
            </h3>
            <p className="mt-4">
              When you want to sell your Rolex in New York City, you deserve more than a basic appraisal and a
              rushed offer. At InstaGold, our expert and transparent approach is what makes us the most
              trusted across Manhattan, Brooklyn, Queens, and Jersey City. Clients choose us because they want
              a fast and safe experience, which is something most other watch buyers simply can’t match.
            </p>
            <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
              {[
                [
                  "20+ years of Experience in Rolex Valuation",
                  "Our team knows all the vintage, discontinued models, and the newest Rolex releases. You can bring in a Submariner, Daytona, Datejust, GMT-Master, or rare collectors’ watch, and you get a precise valuation backed by accurate and current market data.",
                ],
                [
                  "Instant Offers, Immediate Payment",
                  "You don’t wait hours or days for an answer. You get your quote instantly, and if you accept our offer, you’re paid on the spot. Bank transfer, cash, or whichever method you prefer.",
                ],
                [
                  "Highest Payouts in NYC",
                  "Because we operate with low overhead and have a massive resale network, we consistently pay more than regular jewelers, pawn shops, or online buyers. When people want the best place to sell their Rolexes, they come to us.",
                ],
                [
                  "Fully Transparent Process",
                  "Nothing happens behind the scenes. Be it authentication or pricing, you see every step, and we explain exactly how your offer is calculated.",
                ],
                [
                  "Secure & Private Transactions",
                  "Our office provides discreet, one-on-one appointments with security protocols that protect your identity and your watch.",
                ],
                [
                  "Trusted by Locals & Collectors Alike",
                  "No matter what area of New York you’re in, you get the same premium service. Our returning clients are proof that we deliver what we promise.",
                ],
                [
                  "A Customer Experience You’ll Actually Enjoy",
                  "From the moment you contact us, our team promises a seamless, stress-free time. That’s why thousands of New Yorkers have made InstaGold the buyer they go to when they want to sell their Rolexes without hassle.",
                ],
              ].map(([term, desc]) => (
                <div key={term} className="py-5">
                  <dt className="font-display text-lg text-foreground">{term}</dt>
                  <dd className="mt-1.5 text-base">{desc}</dd>
                </div>
              ))}
            </dl>

            <h3 id="guide-market" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              7. How the Rolex Market Works
            </h3>
            <p className="mt-4">
              Rolex prices seem to have a life of their own. The market behaves more like people are buying
              real estate, art, and high-end collectibles than everyday retail. When you step into that world
              to sell your Rolex, you start noticing patterns.
            </p>
            <p className="mt-4">
              For instance, certain models like the Submariner and Day-Date tend to hold steady year after
              year. They don’t change much because the demand from collectors is pretty consistent, so there’s
              always someone ready to buy. Other watches like the Air-King or Explorer might fluctuate more
              because of factors like production updates, discontinued references, or collectors have suddenly
              taken an interest.
            </p>
            <p className="mt-4">
              Another thing people don’t realize is that the Rolex market has seasons. Tax season and the
              holidays often see more interest as people buy them as gifts or liquidate assets. Auction cycles
              also influence the pre-owned market. When a Daytona smashes a record at an international sale,
              everyday buyers start paying attention. Because NYC is home to serious collectors, investors,
              and long-time watch enthusiasts, prices here tend to keep up with global demand faster than in
              other places. That’s good for sellers.
            </p>
            <p className="mt-4">
              So if you’re thinking about selling, it helps to work with a Rolex buyer who actually follows
              these trends, not someone guessing off a quick Google search. You deserve real numbers based on
              actual market behavior. That’s why so many people who want to sell Rolex prefer coming to
              experts who study the market.
            </p>

            <h3 id="guide-micro" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              8. Micro-Guides for Specific Situations
            </h3>
            <div className="mt-6 grid gap-px bg-hairline sm:grid-cols-2">
              {[
                [
                  "Selling a Vintage Rolex",
                  "Vintage Rolex watches are full of tiny details that can double and even triple in value. For example, a fading dial might seem like it’s damaged, but collectors call it patina. They’ll pay big money for the right kind. If you’re selling something from the ‘60s, ‘70s, or ‘80s, resist the urge to polish or “freshen it up.” You might remove the very thing a collector loves.",
                ],
                [
                  "Selling a Modern Rolex",
                  "Modern models with ceramic bezels are popular because they’re durable and look new for years. Prices for modern models tend to be more condition-sensitive. Light scratches aren’t a big deal, but deep dents might affect the offer. Bringing in the box and papers helps, but you can still sell your Rolex without them.",
                ],
                [
                  "Selling a Rolex You Rarely Wore",
                  "This is extremely common. Maybe someone gifted it to you, or maybe you bought it during a different phase of your life. Watches that were worn once or twice usually fetch strong offers because minimal wear means minimal restoration work. Don’t worry about those tiny scratches as they’re normal.",
                ],
                [
                  "Selling a Rolex You Recently Serviced",
                  "If you serviced your watch at an official Rolex store, bring the paperwork. This is so that your buyers are reassured that the watch isn’t tampered with. Just avoid aftermarket changes since collectors generally prefer original parts.",
                ],
                [
                  "Selling a Damaged Rolex",
                  "Keep in mind that even damaged watches have value to them. A cracked crystal or non-functioning movement doesn’t mean no one would want it. Sometimes the model is rare enough that collectors buy it despite issues because restoring it is worth the investment.",
                ],
                [
                  "Selling an Inherited Rolex",
                  "Inheriting a Rolex often comes with questions rather than paperwork. Bring whatever you have — the watch alone is enough to start. We can help identify the reference, explain what the piece is worth today, and walk you through the process quietly and without pressure, whether you decide to sell now or simply want a valuation for your records.",
                ],
              ].map(([title, body]) => (
                <article key={title} className="bg-background p-6">
                  <h4 className="font-display text-xl text-foreground">{title}</h4>
                  <p className="mt-2 text-[0.92rem]">{body}</p>
                </article>
              ))}
            </div>

            <h3 id="guide-options" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              9. Comparing Selling Options in NYC
            </h3>
            <p className="mt-4">New York gives you plenty of choices when you want to sell your Rolex:</p>
            <ol className="mt-5 space-y-4">
              {[
                [
                  "Selling to Local Watch Buyers (Like Us)",
                  "This is where you’ll usually get the best price easily and safely. You meet with them face-to-face, and you’re paid instantly. Plus, you get to work with people who have real experience.",
                ],
                [
                  "Selling Online",
                  "The internet is full of big platforms that promise easy selling. The catch is that you need to ship your watch first, wait for evaluation, wait for paperwork, wait for payment. It’s incredibly slow (not to mention risky), and sometimes the final offer is lower than the estimate you were shown.",
                ],
                [
                  "Auction Houses",
                  "Auctions can be exciting, but you never know what to expect. You also have to pay fees and wait weeks or months for the right buyers to show up. Most everyday sellers don’t want that kind of delay.",
                ],
                [
                  "Pawn Shops",
                  "They’re fast, yes, but rarely the best option for luxury watches. Pawn shops deal with everyday items. Rolex watches need proper expertise with collectors who truly understand their value.",
                ],
                [
                  "Marketplace Sites (Craigslist, Facebook, etc.)",
                  "This one is the riskiest since meeting strangers with high-value items opens the door to scams. You never want to be carrying a multi-thousand-dollar item into a random setting.",
                ],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5 border-b border-hairline pb-4">
                  <span className="font-display text-2xl text-champagne-deep">{i + 1}</span>
                  <span>
                    <strong className="font-medium text-foreground">{title}:</strong> {body}
                  </span>
                </li>
              ))}
            </ol>

            <h3 id="guide-prepare" className="mt-14 scroll-mt-32 font-display text-2xl text-foreground sm:text-3xl">
              10. Preparing Your Rolex Before Selling
            </h3>
            <p className="mt-4">You don’t need to do much, really. But these few easy steps can help:</p>
            <Bullets
              items={[
                "Give it a quick wipe with a microfiber cloth. Nothing fancy, just a gentle cleaning.",
                "Gather whatever you have: the box, papers, receipts. But if you can’t find them, no stress.",
                "Don’t polish it. Collectors prefer original finishing even if it shows light wear.",
                "Avoid trying to repair it yourself. Opening the case or trying to fix anything yourself can reduce the value.",
                "Bring a valid ID. This is the standard practice for all luxury transactions.",
                "Write down any questions you want to ask. People often forget until after the appointment.",
              ]}
            />
            <p className="mt-4">
              Don’t worry if your watch isn’t perfect. Rolex watches are built to last, and appraisers expect
              normal signs of use. The whole point of coming to professionals is so you don’t have to
              “prepare” anything complicated.
            </p>

            <GuideCta />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 block size-1 shrink-0 bg-accent-soft" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function GuideCta() {
  return (
    <div className="mt-12 flex flex-col gap-4 border-y border-hairline bg-card px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-display text-xl text-foreground">
        Want a real number for your Rolex? Start with a free, no-obligation valuation.
      </p>
      <Cta href={SITE.offerUrl} className="shrink-0">
        Get a Free Offer
      </Cta>
    </div>
  );
}