import { ReviewHome } from "@/components/site/ReviewHome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "InstaGold Reviews | NYC Gold & Watch Buyer, 47th St",
    description: "Read reviews of InstaGold, the licensed NYC gold and luxury watch buyer on 47th Street. See what sellers say about our fair offers and same-day payment.",
    alternates: {
        canonical: "https://instagoldbuyers.com/reviews",
    }
}
export default function Page() {

    return (
        <>
            <ReviewHome />
        </>
    )
}