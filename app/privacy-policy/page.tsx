import { Container, Section } from "@/components/site/ui";
import Link from "next/link"
import { Metadata } from "next";


const metadata: Metadata = {
    title: "Privacy Policy | InstaGold",
    description: "How InstaGold collects, uses, and protects your personal information when you sell gold, watches, and jewelry with us.",
    alternates: {
        canonical: "https://lux-offer-pro.lovable.app/privacy-policy",
    },
};

const CONTACT_LINK = <Link href="/contact" className="rule-link">contact us</Link>;

export default function PrivacyPolicy() {
    return (
        <Section tone="ivory" className="py-16 sm:py-24">
            <Container className="max-w-2xl">
                <article className="mx-auto text-left">
                    <h1 className="font-display text-4xl font-semibold leading-tight text-heading sm:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="measure mt-6 text-base leading-relaxed text-foreground">
                        InstaGold is committed to protecting your privacy. This policy explains what information we
                        collect, how we use it, and the choices you have. Our website is instagold.com.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026.</p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">Who We Are</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        InstaGold is a licensed gold, precious metals, and watch buyer located at 31 W 47th Street,
                        Suite 202, New York, NY 10036. We buy from customers across Manhattan and the greater New York
                        City area.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">What Information We Collect</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        We only collect the information we need to give you an offer and complete a sale.
                    </p>
                    <ul className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                        <li>
                            <h3 className="font-semibold text-foreground">Contact details</h3>
                            <p className="mt-1">
                                Your name, phone number, and email when you request an offer or reach out to us.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-foreground">Item details</h3>
                            <p className="mt-1">
                                The description, photos, weight, or documents you share about what you want to sell.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-foreground">Website data</h3>
                            <p className="mt-1">
                                Basic analytics such as pages visited and device type, collected through cookies to improve
                                the site.
                            </p>
                        </li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">How We Use Your Information</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        We use the information you provide to:
                    </p>
                    <ul className="mt-5 space-y-2 text-base leading-relaxed text-muted-foreground [&>li]:relative [&>li]:pl-5">
                        <li className="before:absolute before:left-0 before:content-['•']">Prepare and send you an offer.</li>
                        <li className="before:absolute before:left-0 before:content-['•']">Respond to your questions and requests.</li>
                        <li className="before:absolute before:left-0 before:content-['•']">
                            Complete and record a transaction if you choose to sell.
                        </li>
                        <li className="before:absolute before:left-0 before:content-['•']">Improve our website and services.</li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">How We Share Your Information</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        We do not sell or rent your personal information. We only share it with trusted service
                        providers who help us operate our business and website, and only when they agree to keep it
                        confidential. We may also share information when required by law.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">How Long We Keep Your Information</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        We keep your information only as long as needed to provide our services and to meet legal, tax,
                        and record-keeping requirements. After that, we securely delete or anonymize it.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">Cookies</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        Our website uses cookies to remember your preferences and understand how visitors use the site.
                        You can turn off cookies in your browser settings, though some parts of the site may not work as
                        well.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">Your Privacy Rights</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        You have the right to access, correct, or request deletion of your personal information. To
                        make a request, please {CONTACT_LINK} and we will respond as required by law.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">Changes to This Policy</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        We may update this privacy policy from time to time. Any changes will be posted on this page
                        with a new update date.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold text-heading">Contact Us</h2>
                    <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">
                        If you have any questions about this privacy policy or how we handle your information, please{" "}
                        {CONTACT_LINK}.
                    </p>
                </article>
            </Container>
        </Section>
    );
}
