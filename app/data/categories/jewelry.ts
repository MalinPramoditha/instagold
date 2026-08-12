import { BadgeCheck, Banknote, Check, Crown, Gem, LineChart, MapPin, Sparkles } from "lucide-react";

export const jewelryData = {
    meta: {
        title: "Sell Jewelry for Cash NYC | Same-Day | InstaGold",
        description: "Sell jewelry for cash in NYC at our licensed 47th St location in Manhattan. Top payouts on gold, diamond and designer jewelry, paid same day. Free offer in minutes.",
    },

    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell Jewelry for Cash in NYC",
        image: {
            title: "jewelry-hero",
            alt: "Gold and diamond jewelry on travertine stone at the InstaGold 47th Street office",
        },
        description: "Sell jewelry for cash in NYC with InstaGold, a licensed buyer on 47th Street in the Diamond District, steps from Rockefeller Center and Fifth Avenue. We pay top rates for gold, diamond, and designer jewelry. We test and value each piece in front of you and pay the same day. No appointment needed. No obligation to sell."
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
                body: "We test the metal, grade the stones, and value your jewelry in front of you.",
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
        title: "Why Sell Your Jewelry to InstaGold",
        description: "We make selling jewelry in Manhattan simple, fair, and fast.",
        items: [
            {
                icon: BadgeCheck,
                title: "Licensed Buyer",
                body: "NYC Lic# 2134780-DCWP.",
            },
            {
                icon: Banknote,
                title: "Same-Day Payment",
                body: "Cash or wire once you accept.",
            },
            {
                icon: LineChart,
                title: "Fair Market Offers",
                body: "Priced on metal, stones, and brand value.",
            },
            {
                icon: MapPin,
                title: "Diamond District Location",
                body: "31 W 47th Street, Suite 202, in the heart of Manhattan.",
            },
        ]
    },

    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Jewelry We Buy",
        description: "We buy fine jewelry in every form and condition, whole, broken, or as a full estate.",
        items: [
            {
                icon: Sparkles,
                title: "Gold Jewelry",
                body: "Chains, rings, bracelets, and earrings, 10K to 24K.",
            },
            {
                icon: Gem,
                title: "Diamond Jewelry",
                body: "Engagement rings, tennis bracelets, and loose diamonds.",
            },
            {
                icon: Crown,
                title: "Designer and Signed Jewelry",
                body: "Cartier, Tiffany, Van Cleef, Bulgari, and more.",
            },
            {
                icon: BadgeCheck,
                title: "Estate and Antique Jewelry",
                body: "Inherited pieces, vintage, and full collections.",
            },
        ],
        secondary_description: "We also buy platinum jewelry, watches, and precious gemstones.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "cat-jewelry",
            alt: "Specialist testing a gold and diamond ring during an InstaGold jewelry valuation"
        },
        eyebrow: "Fair value",
        title: "Get More Cash for Your Jewelry",
        description: `Most people who sell jewelry are underpaid. Pawn shops and mail-in buyers value gold only and ignore the diamonds, gemstones, and brand.\n\nOn a designer or diamond piece, that can mean thousands of dollars lost.\n\nInstaGold values every part of your jewelry, the metal, the stones, and the maker, and pays for all of it. We test each piece in front of you and show you how the offer is built. Licensed, clear, and same day.`,
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
            alt: "InstaGold specialist valuing jewelry at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Jewelry in NYC",
        description: "InstaGold is located at 31 W 47th Street in the Diamond District, minutes from Rockefeller Center, Bryant Park, and Grand Central. It is the most trusted place to sell jewelry for cash in Manhattan. We buy from sellers across New York City and the tri-state area. Walk in during business hours or get an offer online first.",
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
            q: "How much cash can I get for my jewelry?",
            a: "It depends on the metal, the stones, the brand, and the condition. We value every part of the piece and show you how the offer is calculated.",
        },
        {
            q: "Do you buy broken or single-earring jewelry?",
            a: "Yes. We buy jewelry whole, broken, or incomplete, and pay for the gold and any stones.",
        },
        {
            q: "Do you buy designer jewelry for more than melt value?",
            a: "Yes. For signed pieces from makers like Cartier or Tiffany, we pay brand value, not just metal weight.",
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
        title: "Sell Your Jewelry Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};