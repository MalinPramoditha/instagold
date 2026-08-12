import {
    BadgeCheck,
    Banknote,
    LineChart,
    MapPin,
    Recycle,
    Scissors,
    Sparkles,
    Stethoscope,
} from "lucide-react";

export const dentalGoldData = {
    meta: {
        title: "Sell Dental Gold NYC | Scrap Gold Buyers | InstaGold",
        description: "Sell dental gold in NYC at our licensed 47th St location. Top rates for dental, scrap and broken gold, tested and paid same day. Free offer in minutes.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-dental-gold-nyc",
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
        title: "Sell Dental Gold in NYC",
        image: {
            title: "dental-gold-hero",
            alt: "Dental gold crowns, bridges and scrap gold on stone at the InstaGold 47th Street office",
        },
        description: "Sell dental gold in NYC the easy way with InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top rates for dental gold, scrap, and broken gold of every karat. We test, weigh, and value it in front of you and pay the same day. No appointment needed. No obligation to sell."
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
                body: "We test, weigh, and value your dental and scrap gold in front of you.",
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
        title: "Why Sell Your Dental Gold to InstaGold",
        description: "We make selling dental and scrap gold simple, fair, and fast.",
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
        title: "Dental and Scrap Gold We Buy",
        description: "We buy dental gold and scrap gold in any form and condition, in any quantity, with the stones or fillings still attached.",
        items: [
            {
                icon: Stethoscope,
                title: "Dental Gold",
                body: "Crowns, bridges, inlays, and gold fillings.",
            },
            {
                icon: Scissors,
                title: "Broken and Scrap Gold",
                body: "Damaged chains, single earrings, and bent pieces.",
            },
            {
                icon: Recycle,
                title: "Casting and Bench Scrap",
                body: "Filings, sprues, and jeweler's casting gold.",
            },
            {
                icon: Sparkles,
                title: "Mixed Karat Lots",
                body: "10K to 24K, sorted and tested for you.",
            },
        ],
        secondary_description: "We also buy gold-filled and gold-capped dental work, and mixed bags of odds and ends.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "cat-gold",
            alt: "Dental gold and scrap gold weighed on a jeweler's scale during an InstaGold evaluation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Dental and Scrap Gold",
        description: `Most people throw dental gold in a drawer or sell it for far less than it is worth. Pawn shops and mail-in kits lowball scrap and dental gold because they assume you do not know the karat or weight.\n\nEven a small box of crowns and broken pieces can be worth hundreds of dollars at the live market rate.\n\nInstaGold tests and weighs every piece in front of you, prices it against the live gold spot rate, and shows you exactly how your offer is calculated. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: {
            label: "",
            url: "",
            action: "",
        }
    },

    location: {
        align: "left",
        tone: "white",
        image: {
            title: "office-appraisal",
            alt: "InstaGold specialist testing dental gold at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Dental Gold in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell dental and scrap gold in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
            quote: "I had a little box of old crowns from years of dental work and no idea they were worth anything. They tested each piece and paid me on the spot at the live rate.",
            name: "Ruth Callahan",
            item: "Dental gold",
        },
        {
            quote: "Brought in a bag of broken chains and single earrings. Everything was weighed and tested in front of me, and the offer was far more than the mail-in kit I almost used.",
            name: "Marcus Lee",
            item: "Scrap gold",
        },
        {
            quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.",
            name: "Przemysław Prusinowski",
            item: "Scrap & dental gold",
        },
        {
            quote: "As a retired dentist I had accumulated a fair amount of gold over the years. InstaGold sorted it by karat, showed me the math, and gave me a number I could not argue with.",
            name: "Dr. Alan Foster",
            item: "Dental gold lot",
        },
        {
            quote: "Fast and honest. They explained how they test scrap and paid me the same visit. No pressure and no games.",
            name: "Priya Sharma",
            item: "Broken gold",
        },
    ],

    faqs: [
        {
            q: "How much is dental gold worth?",
            a: "Dental gold is valued by its actual gold content, which varies by piece. We test the karat, weigh it, and price it against the live gold spot rate, then show you the math.",
        },
        {
            q: "Do you buy crowns with the tooth or filling still attached?",
            a: "Yes. You do not need to clean or separate anything. We assess the gold content and price it fairly.",
        },
        {
            q: "Do you buy broken and scrap gold too?",
            a: "Yes. We buy broken chains, single earrings, bent pieces, casting scrap, and mixed karat lots in any quantity.",
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
        title: "Sell Your Dental and Scrap Gold Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};
