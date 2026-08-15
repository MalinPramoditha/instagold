import { BadgeCheck, Banknote, Check, Gem, Heart, MapPin, ScanSearch, Sparkles, LineChart } from "lucide-react";


export const diamondsData = {
    meta: {
        title: "Sell Diamonds NYC | Top Cash Offers | InstaGold",
        description: "Sell diamonds in NYC at our licensed 47th St location in Manhattan. Top cash for loose diamonds, rings and diamond jewelry, paid same day. Free offer in minutes.",
    },

    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/cash-for-gold-nyc",
            telephone: "+1-212-901-5705",
            address: {
                "@type": "PostalAddress",
                streetAddress: "31 W 47th St, Suite 202",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10036",
                addressCountry: "US",
            },
        }
    ],

    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell Diamonds in NYC",
        image: {
            title: "diamonds-hero",
            alt: "",
        },
        description: "Sell diamonds in NYC with InstaGold, a licensed diamond buyer on 47th Street in the Diamond District, steps from Rockefeller Center and Fifth Avenue. We pay top cash for loose diamonds, engagement rings, and diamond jewelry. We grade every stone in front of you and pay the same day. No appointment needed. No obligation to sell."
    },
    offerForm: {
        initialCategory: "Diamonds",
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
                body: "We weigh, test, and price your gold in front of you at live rates.",
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
        title: "Why Sell Your Diamonds to InstaGold",
        description: "We make selling diamonds in Manhattan simple, fair, and fast.",
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
        title: "Diamonds We Buy",
        description: "We buy diamonds of every shape, size, and setting, certified or not.",
        items: [
            {
                icon: Gem,
                title: "Loose Diamonds",
                body: "Round, princess, cushion, oval, emerald, and all cuts.",
            },
            {
                icon: Heart,
                title: "Engagement Rings",
                body: "Solitaires, halos, and diamond wedding sets.",
            },
            {
                icon: Sparkles,
                title: "Diamond Jewelry",
                body: "Tennis bracelets, pendants, studs, and estate pieces.",
            },
            {
                icon: BadgeCheck,
                title: "Certified Diamonds",
                body: "GIA, IGI, and other graded stones.",
            },
        ],
        secondary_description: "We also buy fancy color diamonds and large carat stones.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "diamonds-examined",
            alt: "Specialist appraising a piece in the InstaGold 47th Street office"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Diamonds",
        description: `Most people who sell diamonds are underpaid. Pawn shops and quick buyers lowball on grading and count on you not knowing your stone's real quality.\n\nOn a high-clarity or large carat diamond, that can mean thousands of dollars lost.\n\nInstaGold grades your diamond on cut, color, clarity, and carat in front of you, prices it against real market data, and shows you how the offer is built. Licensed, clear, and same day.`,
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
            alt: "Specialist appraising a piece in the InstaGold 47th Street office"
        },
        eyebrow: "Location",
        title: "Where to Sell Diamonds in NYC",
        description: "InstaGold is located at 31 W 47th Street in the Diamond District, minutes from Rockefeller Center, Bryant Park, and Grand Central. It is the most trusted place to sell diamonds in Manhattan. We buy from sellers across New York City and the tri-state area. Walk in during business hours or get an offer online first.",
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
            q: "How much can I get for my diamond?",
            a: "It depends on the cut, color, clarity, and carat weight. We grade your diamond in front of you and price it against current market data, then show you how the offer is calculated.",
        },
        {
            q: "Do you buy diamonds without a certificate?",
            a: "Yes. A GIA or IGI certificate helps confirm value, but we grade and buy uncertified diamonds too.",
        },
        {
            q: "Do you buy engagement rings?",
            a: "Yes. We buy engagement rings, wedding sets, and all diamond jewelry, and pay for both the stones and the metal.",
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
            a: "Yes. We are a licensed NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202.",
        },
    ],

    cta: {
        title: "Sell Your Diamonds Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};