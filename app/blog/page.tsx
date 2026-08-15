import BlogHome from "@/components/site/BlogHome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Selling Gold, Watches & Jewelry in NYC | InstaGold",
    description: "Guides and tips for selling gold, watches, and jewelry in NYC. Learn how to get the most for your valuables from InstaGold's experts.",
    alternates: {
        canonical: "https://instagoldbuyers.com/blog",
    }
}


export default function Page() {
    return (
        <>
            <BlogHome />
        </>
    );
}