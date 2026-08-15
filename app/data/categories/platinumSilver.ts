import {
    BadgeCheck,
    Banknote,
    CircleDollarSign,
    Coins,
    LineChart,
    MapPin,
    Utensils,
    Watch,
} from "lucide-react";

export const platinumSilverData = {
    meta: {
        title: "Sell Platinum NYC | Platinum & Silver Buyers | InstaGold",
        description: "Sell platinum in NYC at our licensed 47th St location. Top rates for platinum and silver bars, coins, jewelry and flatware, paid same day.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://instagoldbuyers.com/sell-platinum-silver-nyc",
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
        title: "Sell Platinum in NYC",
        image: {
            title: "platinum-silver-hero",
            alt: "Platinum bars, silver coins and sterling flatware on stone at the InstaGold 47th Street office",
        },
        description: "Sell platinum in NYC the smart way with InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top rates for platinum and silver in every form, from bars and coins to jewelry and flatware. We test, weigh, and value it in front of you and pay the same day. No appointment needed. No obligation to sell."
    },
    offerForm: {
        initialCategory: "Watches",
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
                body: "We test, weigh, and value your platinum and silver in front of you.",
            },
            {
                title: "Get Paid Same Day",
                body: "Accept the offer and get paid. Walk away anytime if you do not.",
            },
        ]
    },

    rates: [
        { metal: "Platinum", note: "Priced at today's live spot rate" },
        { metal: "Silver", note: "Priced at today's live spot rate" },
        { metal: "Gold", note: "Priced at today's live spot rate" },
    ],

    companyDetails: {
        eyebrow: "Why InstaGold",
        title: "Why Sell Your Platinum and Silver to InstaGold",
        description: "We make selling platinum and silver simple, fair, and fast.",
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
                title: "Live Spot Pricing",
                body: "Every offer is based on the current platinum and silver spot price.",
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
        title: "Platinum and Silver We Buy",
        description: "We buy platinum and silver in every form and quantity, from investment metal to household pieces.",
        items: [
            {
                icon: CircleDollarSign,
                title: "Platinum Bars and Coins",
                body: "Bars, rounds, and coins of any weight.",
            },
            {
                icon: Coins,
                title: "Silver Bars and Coins",
                body: "Bullion, rounds, and pre-1965 US silver coins.",
            },
            {
                icon: Utensils,
                title: "Sterling Silver and Flatware",
                body: "Sterling sets, serving pieces, and hollowware.",
            },
            {
                icon: Watch,
                title: "Platinum and Silver Jewelry",
                body: "Rings, chains, and scrap, marked or unmarked.",
            },
        ],
        secondary_description: "We also buy platinum thermocouple wire, lab and industrial platinum, and mixed silver lots.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "platinum-silver-examined",
            alt: "Platinum bars and silver coins weighed on a jeweler's scale during an InstaGold evaluation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Platinum and Silver",
        description: `Most people who sell platinum or silver are underpaid. Pawn shops and mail-in buyers apply wide margins and count on you not knowing the live spot price.\n\nPlatinum in particular is often mistaken for white gold or silver and bought for far less than it is worth.\n\nInstaGold tests every piece to confirm the metal, weighs it, and prices it against the live spot rate, then shows you exactly how your offer is calculated. Licensed, clear, and same day.`,
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
            title: "platinum-silver-end",
            alt: "InstaGold specialist testing a platinum bar at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Platinum and Silver in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell platinum and silver in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
            quote: "I had a platinum ring I thought was white gold. They tested it in front of me, showed me it was platinum, and paid me far more than another shop had offered.",
            name: "Grace Whitman",
            item: "Platinum jewelry",
        },
        {
            quote: "Sold my grandmother's sterling flatware set. They weighed every piece, kept the silver spot price on the screen, and paid me the same visit.",
            name: "Eleanor Brooks",
            item: "Sterling flatware",
        },
        {
            quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.",
            name: "Przemysław Prusinowski",
            item: "Silver bullion",
        },
        {
            quote: "Brought in a mix of silver rounds and old coins. The offer was the fairest of three places I tried and they walked me through the math.",
            name: "Marcus Lee",
            item: "Silver coins",
        },
        {
            quote: "Fast, professional, and transparent. They confirmed my platinum bars, priced them at spot, and I got paid on the spot.",
            name: "James Whitfield",
            item: "Platinum bars",
        },
    ],

    faqs: [
        {
            q: "How much is my platinum or silver worth?",
            a: "It is valued by weight and purity against the live platinum or silver spot price on the day you sell. We test and weigh each piece in front of you and show you the math.",
        },
        {
            q: "How do you tell platinum from white gold or silver?",
            a: "We test every piece to confirm the exact metal. Platinum is often mistaken for white gold or silver, so testing protects you from being underpaid.",
        },
        {
            q: "Do you buy sterling flatware and silverware?",
            a: "Yes. We buy sterling flatware, serving pieces, hollowware, and scrap silver in any quantity.",
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
        title: "Sell Your Platinum and Silver Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};
