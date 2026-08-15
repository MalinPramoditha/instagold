export const homeSchema = {
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://instagold-sigma.vercel.app/#business",
        "name": "InstaGold",
        "legalName": "InstaGold Buyers Refinery",
        "url": "https://instagold-sigma.vercel.app/",
        "image": "https://instagold-sigma.vercel.app/assets/og-image.jpg",
        "logo": "https://instagold-sigma.vercel.app/assets/logo.png",
        "telephone": "+1-212-901-5705",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "31 W 47th Street, Suite 202",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10036",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7573,
            "longitude": -73.9800
        },
        "areaServed": [
            { "@type": "Place", "name": "Manhattan" },
            { "@type": "Place", "name": "New York City" },
            { "@type": "Place", "name": "Diamond District" },
            { "@type": "Place", "name": "Brooklyn" },
            { "@type": "Place", "name": "Queens" }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "makesOffer": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Gold" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Gold Coins" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Gold Bullion" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Silver and Platinum" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Diamonds" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Fine Jewelry" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sell Luxury Watches" } }
        ],
        "sameAs": [
            "https://www.facebook.com/",
            "https://www.instagram.com/",
            "https://www.youtube.com/"
        ]
    },

    website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://instagold-sigma.vercel.app/#website",
        "url": "https://instagold-sigma.vercel.app/",
        "name": "InstaGold",
        "publisher": { "@id": "https://instagold-sigma.vercel.app/#business" }
    },

    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://instagold-sigma.vercel.app/#organization",
        "name": "InstaGold",
        "legalName": "InstaGold Buyers Refinery",
        "url": "https://instagold-sigma.vercel.app/",
        "logo": "https://instagold-sigma.vercel.app/assets/logo.png",
        "telephone": "+1-212-901-5705",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "31 W 47th Street, Suite 202",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10036",
            "addressCountry": "US"
        }
    },
    breadcrumbList: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://instagold-sigma.vercel.app/#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://instagold-sigma.vercel.app/" }
        ]
    }
}