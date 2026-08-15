import {
    BadgeCheck,
    Banknote,
    Check,
    Coins,
    Landmark,
    LineChart,
    MapPin,
    Sparkles,
} from "lucide-react";

export const goldCoinsData = {
    meta: {
        title: "Gold Coin Buyers NYC | Top Payouts | InstaGold",
        description: "Trusted gold coin buyers in NYC. We pay top rates for Krugerrands, Eagles, Maple Leafs and rare coins at our licensed 47th St location. Free offer in minutes.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://instagoldbuyers.com/cash-for-gold-nyc",
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
        title: "Gold Coin Buyers in NYC",
        image: {
            title: "gold-coins-hero",
            alt: "American Gold Eagle, Krugerrand and Canadian Maple Leaf coins on stone at the InstaGold 47th Street office",
        },
        description: "Gold coin buyers in NYC do not come more trusted than InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top rates for bullion and rare gold coins. We test, weigh, and value your coins in front of you and pay the same day. No appointment needed. No obligation to sell."
    },
    offerForm: {
        initialCategory: "Gold",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            {
                title: "Get a Free Offer",
                body: "Submit the form or walk in and tell us what coins you have.",
            },
            {
                title: "Free Evaluation",
                body: "We test, weigh, and value your coins in front of you.",
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
        title: "Why Sell Your Gold Coins to InstaGold",
        description: "We make selling gold coins simple, fair, and fast.",
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
                title: "Live Market Pricing",
                body: "Every offer is based on the current gold spot price.",
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
        title: "Gold Coins We Buy",
        description: "We buy bullion coins and numismatic coins in any quantity, from single pieces to full collections.",
        items: [
            {
                icon: Coins,
                title: "American Gold Eagles",
                body: "The most traded US gold coin.",
            },
            {
                icon: Landmark,
                title: "Krugerrands",
                body: "The classic one ounce bullion coin.",
            },
            {
                icon: Sparkles,
                title: "Canadian Maple Leafs",
                body: "24 karat bullion, any year.",
            },
            {
                icon: BadgeCheck,
                title: "Rare and Numismatic Coins",
                body: "Pre-1933 US coins, sovereigns, and collectible pieces.",
            },
        ],
        secondary_description: "We also buy Britannias, Philharmonics, Pandas, and gold coin lots of every kind.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "gold-examined",
            alt: "Gold coins and chains weighed on a jeweler's scale during an InstaGold evaluation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Gold Coins",
        description: `Most coin sellers are underpaid. Pawn shops and mail-in buyers pay melt value only and ignore what a coin is really worth.\n\nFor rare or collectible coins, that can mean losing hundreds or thousands of dollars in numismatic value.\n\nInstaGold values your coins two ways, by live metal price and by collectible worth, and pays you the higher of the two. We show you exactly how the offer is calculated. Licensed, clear, and same day.`,
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
            title: "gold-coin-end",
            alt: "InstaGold specialist testing a gold coin at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Gold Coins in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell gold coins in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
            quote: "Brought in a box of old gold chains and a few coins. Everything was weighed and tested right in front of me, the spot price was on the screen the whole time, and I walked out with cash the same visit.",
            name: "Arielle Pierre",
            item: "Gold jewelry & coins",
        },
        {
            quote: "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
            name: "Olivia MacKinnon",
            item: "Scrap gold",
        },
        {
            quote: "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
            name: "Przemysław Prusinowski",
            item: "Gold bullion",
        },
        {
            quote: "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
            name: "Olivia MacKinnon",
            item: "Scrap gold",
        },
        {
            quote: "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
            name: "Przemysław Prusinowski",
            item: "Gold bullion",
        },
    ],

    faqs: [
        {
            q: "How much are my gold coins worth?",
            a: "It depends on the coin. Bullion coins are valued at the live gold price by weight and purity. Rare coins are valued for their collectible worth. We pay the higher of the two and show you the math.",
        },
        {
            q: "Do you buy single coins or only collections?",
            a: "Both. We buy single coins and full collections, in any quantity.",
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
        title: "Sell Your Gold Coins Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};