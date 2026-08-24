import BlogHome from "@/components/site/BlogHome";
import { Metadata } from "next";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";

export const metadata: Metadata = {
    title: "Blog | Selling Gold, Watches & Jewelry in NYC | InstaGold",
    description: "Guides and tips for selling gold, watches, and jewelry in NYC. Learn how to get the most for your valuables from InstaGold's experts.",
    alternates: {
        canonical: "https://instagoldbuyers.com/blog",
    }
}



const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  category,
  featured,
  "imageUrl": image.asset->url,
"excerpt": body[0].children[0].text}`;


const options = { next: { revalidate: 60 } }

export default async function Page() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "The InstaGold Blog",
        url: "https://instagoldbuyers.com/blog",
        description: "Guides and tips for selling gold, watches, and jewelry in NYC. Learn how to get the most for your valuables from InstaGold's experts.",
        publisher: {
            "@type": "Organization",
            name: "InstaGold Buyers Refinery",
            url: "https://instagoldbuyers.com",
        },
        blogPost: posts,
    }

    return (
        <>
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

            </>
            <BlogHome data={posts} />
        </>
    );
}