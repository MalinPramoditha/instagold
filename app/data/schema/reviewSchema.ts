export const reviewSchema = {
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://instagold-sigma.vercel.app/#business",
        "name": "InstaGold",
        "legalName": "InstaGold Buyers Refinery",
        "url": "https://instagold-sigma.vercel.app/",
        "telephone": "+1-212-901-5705",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "31 W 47th Street, Suite 202",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10036",
            "addressCountry": "US"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "12",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Daniel R." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Brought in old gold chains and got paid more than three other places quoted. Fast, honest, and no pressure at all."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Priya S." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "They weighed everything in front of me and explained the price clearly. Walked out with cash the same day."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Marcus L." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Sold my scrap gold here with no pressure and a fair offer. The whole thing was done in under fifteen minutes."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "James T." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Sold my Rolex Datejust and got a better offer than the online buyers. Smooth, professional, and paid on the spot."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Anthony D." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "They knew exactly what my watch was worth and paid on the spot with no games. A genuinely easy experience."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Kevin M." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Great experience selling my Omega. Quick, fair, and no hassle from start to finish. Highly recommend the team."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sophia G." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Graded my diamond ring right in front of me and explained every detail. Trustworthy and completely transparent."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rachel B." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Got a fair price for a loose diamond I inherited. Very knowledgeable team and a calm, no-pressure process."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Olivia P." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Sold an inherited diamond and they walked me through the grading. Fair price and paid the same afternoon."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Elena V." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Sold a mix of old jewelry and they valued the stones too, not just the gold. Honestly impressed by the fairness."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Nadia K." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Fair, fast, and friendly from the first minute. Got paid the same day for my jewelry with zero hassle."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Tomas A." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Brought in a few broken pieces expecting little and left with a great offer. Friendly, honest, and quick."
            }
        ]
    },
    breadCrumbList: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://instagold-sigma.vercel.app/" },
            { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://instagold-sigma.vercel.app/reviews" }
        ]
    },

}