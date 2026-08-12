import { Container, Section } from "@/components/site/ui";
import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Terms and Conditions | InstaGold",
  description: "The terms and conditions for selling gold, watches, and jewelry to InstaGold at our licensed NYC Diamond District location.",
  alternates: {
    canonical: "https://lux-offer-pro.lovable.app/terms-and-conditions",
  },
};

const CONTACT_LINK = <Link href="/contact" className="rule-link">contact us</Link>;

export default function Page() {
  return (
    <Section tone="ivory" className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <article className="mx-auto text-left">
          <h1 className="font-display text-4xl font-semibold leading-tight text-heading sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="measure mt-6 text-base leading-relaxed text-foreground">
            Welcome to InstaGold. This Site is owned and operated by InstaGold. These terms and conditions
            apply to every InstaGold customer and to your use of this website. By doing business with us,
            you agree to these terms.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026.</p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Requirements for Use</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            You must be at least twenty one (21) years old to do business with InstaGold. By selling or
            offering to sell any item to InstaGold, you represent and warrant that you are the true legal
            owner of that item and that you are acting on your own behalf, not as an agent for anyone else.
            InstaGold may, but is not required to, ask for documentation or proof of ownership.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Valid Identification</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            You must provide a valid government issued photo ID when selling any item to us in person. This
            is required by law for precious metal and secondhand goods transactions in New York City.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Offers and Payment</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            All offers are based on the item's weight, purity, condition, and the live market price at the
            time of evaluation. Offers are made in person after we inspect and test your item. If you accept
            an offer, payment is made the same day by cash or wire transfer. You are under no obligation to
            accept, and there is no cost to receive an offer.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Evaluation of Diamonds and Jewelry</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            To give an accurate offer on diamonds, stones may need to be examined and weighed separately
            from their setting. For jewelry, we assess the metal, the stones, and any brand value. We
            explain how each offer is calculated before you decide.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Final Sale</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            Once you accept an offer and receive payment in person, the sale is final. Because offers are
            made and accepted face to face after you have inspected our evaluation, in person sales are not
            subject to a return or holding period.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Limitation of Liability</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            InstaGold provides fair market offers based on its own evaluation, which is final and binding
            once accepted. To the fullest extent permitted by law, InstaGold will not be liable for any
            indirect, incidental, consequential, or punitive damages, or for any loss of profit or
            opportunity, arising out of any transaction or your use of this website.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Unclaimed Items</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            It is your responsibility to claim any item left with InstaGold. InstaGold will not be liable
            for any item left unclaimed for more than one hundred eighty (180) days from the date it was
            received.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Use of This Website</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            By using this website, you agree to hold harmless InstaGold and its owners, officers, and
            employees from any claims, costs, or damages arising out of your access to or use of this site.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Disputes and Governing Law</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            These terms are governed by the laws of the State of New York, without regard to its conflict of
            law rules. Any dispute arising out of or relating to your use of this website or any transaction
            will be resolved by arbitration in the State of New York under the commercial arbitration rules
            of the American Arbitration Association. Any claim must be filed within one (1) year after it
            arises or it is permanently barred.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Changes to These Terms</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            InstaGold may update these terms from time to time. Any changes will be posted on this page with
            a new update date.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-heading">Contact</h2>
          <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
            If you have any questions about these terms, please {CONTACT_LINK}.
          </p>

          <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
            InstaGold is an independent buyer of pre-owned items and is not sponsored by, associated with,
            or affiliated with Rolex, Patek Philippe, Audemars Piguet, Cartier, Omega, or any other watch or
            jewelry brand, or any of their subsidiaries. All brand names are the property of their respective
            owners and are used for identification purposes only.
          </p>
        </article>
      </Container>
    </Section>
  );
}
