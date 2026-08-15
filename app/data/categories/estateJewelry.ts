import {
    BadgeCheck,
    Banknote,
    Crown,
    Gem,
    LineChart,
    MapPin,
    ScrollText,
    Watch,
} from "lucide-react";

export const estateJewelryData = {
    meta: {
        title: "Sell Estate Jewelry NYC | Top Cash Offers | InstaGold",
        description: "Sell estate jewelry in NYC at our licensed 47th St location. Top cash for antique, vintage and inherited jewelry, valued in front of you and paid same day.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-estate-jewelry-nyc",
            telephone: "+1-212-901-5705",
            address: {
                "@type": "PostalAddress",
                streetAddress: "31 W 47th St, Suite 202",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10036",
                addressCountry: "US",
            },
            areaServed: [
                "Manhattan", "New York City", "Diamond District", "Midtown", "Tribeca",
                "Financial District", "Chelsea", "SoHo", "Flatiron District", "West Village",
                "NoMad", "Upper West Side", "Upper East Side", "Murray Hill", "Gramercy",
                "Hudson Yards", "Lincoln Square", "DUMBO", "Brooklyn Heights", "Park Slope",
                "Long Island City", "Hoboken", "Downtown Jersey City"
            ].map((name) => ({ "@type": "Place", name })),
        }
    ],
    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell Estate Jewelry in NYC",
        image: {
            title: "estate-jewelry-hero",
            alt: "Antique and vintage estate jewelry pieces on stone at the InstaGold 47th Street office",
        },
        description: "Sell estate jewelry in NYC with confidence at InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top cash for antique, vintage, and inherited jewelry. We value every piece in front of you, for its gold, its stones, and its maker, and pay the same day. No appointment needed. No obligation to sell."
    },
    offerForm: {
        initialCategory: "Jewelry",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            {
                title: "Get a Free Offer",
                body: "Submit the form or walk in and tell us what you have.",
            },
            {
                title: "Free Evaluation",
                body: "We assess the metal, grade the stones, and value each piece in front of you.",
            },
            {
                title: "Get Paid Same Day",
                body: "Accept the offer and get paid. Walk away anytime if you do not.",
            },
        ]
    },

    rates: [
        { metal: "Gold", note: "Priced at today's live spot rate" },
        { metal: "Silver", note: "Priced at today's live spot rate" },
        { metal: "Platinum", note: "Priced at today's live spot rate" },
    ],

    companyDetails: {
        eyebrow: "Why InstaGold",
        title: "Why Sell Your Estate Jewelry to InstaGold",
        description: "We make selling estate jewelry simple, fair, and discreet.",
        items: [
            {
                icon: BadgeCheck,
                title: "Licensed and Bonded",
                body: "NYC Lic# 2134780-DCWP.",
            },
            {
                icon: Banknote,
                title: "Same-Day Payment",
                body: "Cash or wire once you accept.",
            },
            {
                icon: LineChart,
                title: "Full Value Offers",
                body: "Priced on the metal, the stones, and the maker.",
            },
            {
                icon: MapPin,
                title: "Diamond District Location",
                body: "31 W 47th Street, Suite 202.",
            },
        ]
    },

    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Estate Jewelry We Buy",
        description: "We buy estate and inherited jewelry of every era and condition, whole collections or single pieces.",
        items: [
            {
                icon: Gem,
                title: "Antique and Vintage Jewelry",
                body: "Victorian, Art Deco, Retro, and mid-century pieces.",
            },
            {
                icon: Crown,
                title: "Designer and Signed Jewelry",
                body: "Cartier, Tiffany, Van Cleef, Bulgari, and more.",
            },
            {
                icon: ScrollText,
                title: "Inherited Collections",
                body: "Full estates, mixed lots, and single heirlooms.",
            },
            {
                icon: Watch,
                title: "Diamonds, Gemstones and Gold",
                body: "Old-cut diamonds, colored stones, and gold settings.",
            },
        ],
        secondary_description: "We also buy estate watches, loose stones, and broken or damaged antique pieces.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "cat-gold",
            alt: "Estate jewelry and old-cut diamonds examined during an InstaGold evaluation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Estate Jewelry",
        description: `Most people who sell estate jewelry are underpaid. Pawn shops and quick buyers value the gold weight only and ignore the diamonds, the gemstones, and the maker.\n\nOn an antique or signed piece, that can mean thousands of dollars in lost value.\n\nInstaGold values every part of your estate jewelry, the metal, the stones, and the name behind it, and pays for all of it. We assess each piece in front of you and show you how the offer is built. Licensed, discreet, and same day.`,
        list: [],
        link_description: "",
        link: {
            label: "",
            url: "",
            action: "",
        }
    },

    location: {
        align: "right",
        tone: "white",
        image: {
            title: "office-appraisal",
            alt: "InstaGold specialist examining an antique ring at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Estate Jewelry in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell estate jewelry in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Steps from Times Square & Grand Central Terminal",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments"
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: {
            label: "Get Directions",
            url: "",
            action: "Direction",
        }
    },

    testimonials: [
        {
            quote: "I inherited my grandmother's jewelry and had no idea where to start. They walked me through each piece, valued the stones as well as the gold, and treated it all with real care.",
            name: "Eleanor Brooks",
            item: "Inherited collection",
        },
        {
            quote: "Had an Art Deco brooch appraised at three places. InstaGold recognized the period and the maker and paid well above what the others offered for the gold alone.",
            name: "Grace Whitman",
            item: "Art Deco brooch",
        },
        {
            quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.",
            name: "Przemysław Prusinowski",
            item: "Estate jewelry",
        },
        {
            quote: "A signed Tiffany piece I almost sold for scrap turned out to be worth far more. They knew exactly what it was and paid me its true value.",
            name: "Sophia Grant",
            item: "Signed jewelry",
        },
        {
            quote: "Discreet, patient, and fair. Selling my late mother's jewelry was hard, and they made the process gentle and honest from start to finish.",
            name: "Rachel Bloom",
            item: "Estate collection",
        },
    ],

    faqs: [
        {
            q: "How much is my estate jewelry worth?",
            a: "It depends on the metal, the stones, the maker, and the era. We value every part of each piece, not just the gold weight, and show you how the offer is calculated.",
        },
        {
            q: "Do you pay extra for antique or signed pieces?",
            a: "Yes. For antique, period, or signed pieces from makers like Cartier or Tiffany, we pay for the design and maker value, not just the metal.",
        },
        {
            q: "Do you buy whole collections and inherited estates?",
            a: "Yes. We buy full estates, mixed lots, and single heirlooms, in any condition.",
        },
        {
            q: "Do I need an appointment?",
            a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first.",
        },
        {
            q: "How do you pay?",
            a: "Same day, by cash or wire transfer, once you accept the offer.",
        },
        {
            q: "Is InstaGold licensed?",
            a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202.",
        },
    ],

    cta: {
        title: "Sell Your Estate Jewelry Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};
