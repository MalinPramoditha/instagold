import {
    BadgeCheck,
    Banknote,
    Check,
    Coins,
    Gem,
    LineChart,
    MapPin,
    Recycle,
    Layers,
    Diamond,
} from "lucide-react";


const META = {
    title: "Cash for Gold NYC | Same-Day Payout | InstaGold",
    description: "Cash for gold in NYC at our licensed 47th St location. Top payouts on gold jewelry, coins and bullion, paid same day. Get a free offer in minutes.",
}

const HERO = {
    eyebrow: "New York · West 47th Street",
    title: " Cash for Gold in NYC",
    image: {
        title: "hero-gold-refined",
        alt: "",
    },
    description: " Cash for gold in NYC starts here. InstaGold is a licensed gold buyer on 47th Street in the Diamond District, paying top rates for gold jewelry, coins, and bullion. We test and weigh your gold in front of you and pay the same day. No appointment needed. No obligation to sell."
}


const WHY = [
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
];



const PROCESS = {
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
};

const SPOT = [
    { metal: "Gold", note: "Priced at today's live spot rate" },
    { metal: "Silver", note: "Priced at today's live spot rate" },
    { metal: "Platinum", note: "Priced at today's live spot rate" },
];

const COMPANY_DETAILS = {
    eyebrow: "Why InstaGold",
    title: " Why Sell Your Gold to InstaGold",
    description: "We make selling gold simple, fair, and fast.",
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
}

const WHAT_WE_BUY = {
    eyebrow: "What we buy",
    title: "What Gold We Buy",
    description: "We pay cash for gold in every form and every karat, from 10K to 24K.",
    items: [
        {
            icon: Gem,
            title: "Gold Jewelry",
            body: "Chains, rings, bracelets, earrings, broken or scrap.",
        },
        {
            icon: Coins,
            title: "Gold Coins",
            body: "Krugerrands, American Eagles, Maple Leafs, and rare coins.",
        },
        {
            icon: Layers,
            title: "Gold Bullion",
            body: "Bars and rounds, from 1 gram to 1 kilo.",
        },
        {
            icon: Recycle,
            title: "Scrap and Dental Gold",
            body: "Broken pieces, casting, and dental gold.",
        },]
}


const ABOUT = {
    align: "left",
    tone: "stone",
    image: {
        title: "cat-gold",
        alt: "Specialist appraising a piece in the InstaGold 47th Street office"
    },
    eyebrow: "Fair value",
    title: "Get More Cash for Your Gold",
    description: `Most sellers get less than their gold is worth.\n\nPawn shops and mail-in services quote below market and count on you not checking the spot price. On just a few ounces, the difference between a fair offer and a lowball can be thousands of dollars.\n\nInstaGold pays against the live market rate. We weigh and test your gold in front of you and show you exactly how your offer is calculated. Licensed, clear, and same day.`,
    list: [],
    link_description: "",
    link: {
        label: "",
        url: "",
        action: "",
    }
};


const LOCATION = {
    align: "left",
    tone: "white",
    image: {
        title: "office-appraisal",
        alt: "Specialist appraising a piece in the InstaGold 47th Street office"
    },
    eyebrow: "Location",
    title: "Where to Sell Gold in NYC",
    description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell gold in New York. We serve sellers from across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
};

const TESTIMONIALS = [
    {
        quote:
            "Brought in a box of old gold chains and a few coins. Everything was weighed and tested right in front of me, the spot price was on the screen the whole time, and I walked out with cash the same visit.",
        name: "Arielle Pierre",
        item: "Gold jewelry & coins",
    },
    {
        quote:
            "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
        name: "Olivia MacKinnon",
        item: "Scrap gold",
    },
    {
        quote:
            "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
        name: "Przemysław Prusinowski",
        item: "Gold bullion",
    },
    {
        quote:
            "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
        name: "Olivia MacKinnon",
        item: "Scrap gold",
    },
    {
        quote:
            "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
        name: "Przemysław Prusinowski",
        item: "Gold bullion",
    },
];

const FAQS = [
    {
        q: "How much cash can I get for my gold in NYC?",
        a: "Your payout is based on the weight, karat, and the live market price on the day you sell. We calculate it in front of you against the current spot rate.",
    },
    {
        q: "Do I need an appointment?",
        a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first to save time.",
    },
    {
        q: "What types of gold do you buy?",
        a: "All of it. Jewelry, coins, bullion, and scrap or dental gold, from 10K to 24K, in any condition.",
    },
    {
        q: "How do you pay?",
        a: "Same day, by cash or wire transfer, once you accept the offer.",
    },
    {
        q: "Is InstaGold licensed?",
        a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202.",
    },
];

const CTA = {
    title: "Turn Your Gold Into Cash Today",
    intro: "Get a free, no-obligation offer in minutes, then decide.",
    primaryLabel: "Get My Free Offer"
}

export {
    META,
    HERO,
    WHY,
    WHAT_WE_BUY,
    PROCESS,
    SPOT,
    ABOUT,
    LOCATION,
    TESTIMONIALS,
    FAQS,
    COMPANY_DETAILS,
    CTA
}
