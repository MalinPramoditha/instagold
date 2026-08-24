import { Container, Cta, Section } from "@/components/site/ui";
import { SITE } from "@/app/data/site";
import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/app/sanity/client";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import authorImg from "@/public/assets/author-placeholder.jpg";
import { ptComponents } from "@/components/site/blocks/ptComponent";
import { Metadata } from "next";

function CtaCard() {
    return (
        <aside className="my-10 rounded-xl border border-hairline bg-card p-6 sm:p-8">
            <p className="eyebrow">Get a Free Offer</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Free, no obligation, and based on the live market. Same-day payment in the Diamond District.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
                <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                <Cta href={SITE.phoneHref} variant="outline">
                    Call {SITE.phone}
                </Cta>
            </div>
        </aside>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await client.fetch<SanityDocument>(POST_QUERY, resolvedParams, options);

    // Fallback image if post.image or SITE.ogImage is undefined
    const fallbackImage = typeof SITE.ogImage === 'string' ? SITE.ogImage : "https://instagoldbuyers.com/og-image.jpg";
    const postImageUrl = post?.image ? urlFor(post.image)?.width(1280).height(720).url() : fallbackImage;
    const ogImageUrl = postImageUrl || fallbackImage;

    return {
        title: post?.metaTitle || post?.title || "InstaGold Blog",
        description: post?.metaDescription || post?.description || "",
        alternates: {
            canonical: `https://instagoldbuyers.com/blog/${post?.slug?.current || ''}`,
        },
        openGraph: {
            title: post?.metaTitle || post?.title,
            description: post?.metaDescription || post?.description,
            url: `https://instagoldbuyers.com/blog/${post?.slug?.current || ''}`,
            siteName: SITE.name,
            images: [
                {
                    url: ogImageUrl, // Guaranteed string, satisfies TypeScript
                },
            ],
            type: "article",
            publishedTime: post?.publishedAt,
            modifiedTime: post?._updatedAt,
        },
        twitter: {
            card: "summary_large_image",
            title: post?.metaTitle || post?.title,
            description: post?.metaDescription || post?.description,
            images: [ogImageUrl], // Guaranteed string, satisfies TypeScript
        },
    };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? createImageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await client.fetch<SanityDocument>(POST_QUERY, resolvedParams, options);

    if (!post) {
        return <div>Post not found</div>;
    }

    const postImageUrl = post.image
        ? urlFor(post.image)?.width(1280).height(720).url()
        : null;

    const postUrl = `https://instagoldbuyers.com/blog/${post.slug.current}`;

    // Dynamically build a valid schema graph so it's never empty/missing
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${postUrl}#article`,
                "url": postUrl,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": postUrl
                },
                "headline": post.title,
                "description": post.metaDescription || post.description || "",
                "articleSection": "Selling Gold",
                "inLanguage": "en-US",
                "datePublished": post.publishedAt || post._createdAt,
                "dateModified": post._updatedAt,
                "image": postImageUrl,
                "author": {
                    "@type": "Organization",
                    "@id": "https://instagoldbuyers.com/#organization",
                    "name": "InstaGold Buyers",
                    "url": "https://instagoldbuyers.com/"
                },
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://instagoldbuyers.com/#organization",
                    "name": "InstaGold Buyers",
                    "url": "https://instagoldbuyers.com/"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${postUrl}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://instagoldbuyers.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://instagoldbuyers.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": postUrl
                    }
                ]
            }
        ]
    };

    const introBlock = post.body?.[0];
    const remainingBlocks = post.body?.slice(1);
    const introText = introBlock?.children?.[0]?.text || "";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Section tone="ivory" className="pb-8 sm:pb-10">
                <Container className="measure">
                    <p className="eyebrow">Gold</p>
                    <h1 className="mt-3 text-3xl leading-tight sm:text-5xl">{post.title}</h1>
                    <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-link" />
                        Licensed NYC buyer, Lic# 2134780-DCWP, 47th Street Diamond District.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        By Sophia Bennett, InstaGold, <span>{new Date(post._updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </p>
                </Container>
            </Section>

            <Section tone="stone" className="py-0">
                <Container className="measure">
                    {postImageUrl && (
                        <img
                            src={postImageUrl}
                            alt={post.image?.alt || post.title}
                            width={1280}
                            height={720}
                            className="aspect-[16/9] w-full rounded-xl object-cover"
                        />
                    )}
                </Container>
            </Section>

            <Section tone="ivory" className="pt-8 sm:pt-10">
                <Container className="measure">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {introText}
                    </p>

                    <CtaCard />

                    {Array.isArray(remainingBlocks) && (
                        <PortableText value={remainingBlocks} components={ptComponents} />
                    )}

                    <CtaCard />

                    <div className="mt-4 rounded-xl border border-hairline bg-card p-6 sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                            <img
                                src={authorImg.src}
                                alt="Sophia Bennett, InstaGold"
                                loading="lazy"
                                width={640}
                                height={640}
                                className="size-20 shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg font-semibold text-foreground">Sophia Bennett</p>
                                <p className="mt-1 text-sm text-muted-foreground">Precious Metals & Luxury Watch Specialist</p>
                                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                                    Sophia Bennett is a precious metals and luxury watch specialist at InstaGold, with experience evaluating gold jewelry, coins, bullion, Rolex watches, and other high-value pieces. Based in New York’s Diamond District, she helps sellers understand what influences an item’s value and guides them through a private, straightforward appraisal process.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Reviewed for accuracy by the InstaGold team.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}