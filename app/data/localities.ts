export type Locality = {
    slug: string;
    name: string;
    region: string;
    landmarks: string[];
    intro: string;
    travel: string;
    scenario: string;
    nearby: string[];
};

export const LOCALITIES: Record<string, Locality> = {
    "financial-district": {
        slug: "financial-district",
        name: "Financial District",
        region: "Lower Manhattan, New York",
        landmarks: ["Wall Street", "Battery Park", "The Oculus"],
        intro:
            "If you’re planning to sell Rolex Financial District, InstaGold is your trusted destination for our expert evaluations, competitive offers, and the smoothest selling experience. Our store is conveniently located in the Diamond District of NYC, where we specialize in luxury timepieces, so that you can be sure you receive the best possible value for your Rolex.",
        travel:
            "Clients travelling up from Wall Street, Battery Park and the Oculus reach our 47th Street office by a single ride on the Midtown-bound subway lines that run the length of Manhattan. Appointments are scheduled around the working day, so a valuation can sit comfortably inside a lunch break or an early evening.",
        scenario:
            "We regularly meet Financial District professionals who received a Rolex as a bonus or milestone gift, wore it for a few seasons, and now keep it in a desk drawer or a home safe. A short, private appraisal gives them a real number before they decide anything.",
        nearby: ["tribeca", "soho", "brooklyn-heights", "downtown-jersey-city", "chelsea", "west-village", "hudson-yards", "flatiron-district"],
    },
    tribeca: {
        slug: "tribeca",
        name: "Tribeca",
        region: "Lower Manhattan, New York",
        landmarks: ["Duane Park", "Hudson River Greenway"],
        intro:
            "If you’re planning to sell Rolex Tribeca, InstaGold offers expert evaluation, a competitive offer and a discreet, unhurried selling experience at our 47th Street office.",
        travel:
            "Tribeca clients travel north to Midtown along Manhattan’s main north–south subway corridors. Private appointments are available throughout the day.",
        scenario:
            "Many Tribeca clients are consolidating a small collection — a Datejust or Submariner kept for years alongside pieces they wear more often.",
        nearby: ["financial-district", "soho", "west-village", "chelsea", "brooklyn-heights", "downtown-jersey-city", "flatiron-district", "hudson-yards"],
    },
    chelsea: {
        slug: "chelsea",
        name: "Chelsea",
        region: "Manhattan, New York",
        landmarks: ["The High Line", "Chelsea Market"],
        intro:
            "If you’re planning to sell Rolex Chelsea, InstaGold provides a market-based valuation and a transparent offer at our 47th Street office, a short trip uptown.",
        travel:
            "Chelsea sits a short journey south of our 47th Street office, with several subway lines and crosstown routes connecting the two.",
        scenario:
            "Chelsea clients often bring inherited watches and want the reference, condition and market position explained before deciding to sell.",
        nearby: ["west-village", "flatiron-district", "hudson-yards", "soho", "tribeca", "financial-district", "upper-east-side", "brooklyn-heights"],
    },
    "upper-east-side": {
        slug: "upper-east-side",
        name: "Upper East Side",
        region: "Manhattan, New York",
        landmarks: ["Museum Mile", "Central Park"],
        intro:
            "If you’re planning to sell Rolex Upper East Side, InstaGold offers a private, expert appraisal and an immediate, transparent offer at our 47th Street office.",
        travel:
            "The Upper East Side connects directly to Midtown along Fifth, Madison and Lexington Avenues, making our office one of the closest professional watch buyers to the neighbourhood.",
        scenario:
            "We frequently assist Upper East Side clients handling estate pieces, where documentation and provenance are part of the conversation.",
        nearby: ["upper-west-side", "midtown-east", "chelsea", "flatiron-district", "west-village", "tribeca", "financial-district", "brooklyn-heights"],
    },
    soho: {
        slug: "soho",
        name: "SoHo",
        region: "Manhattan, New York",
        landmarks: ["Broadway", "Prince Street"],
        intro:
            "If you’re planning to sell Rolex SoHo, InstaGold gives you an expert valuation, a competitive offer and a calm, private transaction at our 47th Street office.",
        travel:
            "SoHo clients travel uptown to Midtown on the lines running beneath Broadway and Sixth Avenue.",
        scenario:
            "SoHo sellers often own modern sports references and want to understand current secondary-market demand before accepting an offer.",
        nearby: ["tribeca", "west-village", "chelsea", "financial-district", "flatiron-district", "brooklyn-heights", "hudson-yards", "downtown-jersey-city"],
    },
    "flatiron-district": {
        slug: "flatiron-district",
        name: "Flatiron District",
        region: "Manhattan, New York",
        landmarks: ["Madison Square Park", "Flatiron Building"],
        intro:
            "If you’re planning to sell Rolex Flatiron District, InstaGold provides a professional Rolex valuation and a clear, no-obligation offer at our 47th Street office.",
        travel:
            "The Flatiron District sits directly south of our office along Fifth Avenue to West 47th Street, one of the shortest journeys of any Manhattan neighbourhood.",
        scenario:
            "Flatiron clients often stop in between meetings for an initial appraisal and return to complete the sale.",
        nearby: ["chelsea", "west-village", "midtown-east", "hudson-yards", "soho", "tribeca", "upper-east-side", "financial-district"],
    },
    "west-village": {
        slug: "west-village",
        name: "West Village",
        region: "Manhattan, New York",
        landmarks: ["Washington Square Park", "Hudson River Park"],
        intro:
            "If you’re planning to sell Rolex West Village, InstaGold offers an unhurried expert appraisal and a transparent offer at our 47th Street office.",
        travel:
            "West Village clients reach Midtown on the Sixth and Seventh Avenue lines, or by a short crosstown trip.",
        scenario:
            "West Village sellers frequently bring vintage references and appreciate guidance on why original, unpolished condition matters.",
        nearby: ["chelsea", "soho", "tribeca", "flatiron-district", "hudson-yards", "financial-district", "brooklyn-heights", "upper-east-side"],
    },
    "hudson-yards": {
        slug: "hudson-yards",
        name: "Hudson Yards",
        region: "Manhattan, New York",
        landmarks: ["The Shed", "Hudson River Park"],
        intro:
            "If you’re planning to sell Rolex Hudson Yards, InstaGold provides a certified appraisal and a competitive offer at our 47th Street office.",
        travel:
            "Hudson Yards connects east to Midtown via the crosstown routes serving 34th Street and the surrounding avenues.",
        scenario:
            "Hudson Yards clients often prefer a scheduled, private appointment before or after the working day.",
        nearby: ["chelsea", "flatiron-district", "west-village", "midtown-east", "soho", "tribeca", "upper-east-side", "financial-district"],
    },
    "brooklyn-heights": {
        slug: "brooklyn-heights",
        name: "Brooklyn Heights",
        region: "Brooklyn, New York",
        landmarks: ["Brooklyn Promenade", "Brooklyn Bridge"],
        intro:
            "If you’re planning to sell Rolex Brooklyn Heights, InstaGold offers an expert Rolex valuation and a transparent offer at our 47th Street office in Manhattan.",
        travel:
            "Brooklyn Heights connects to Midtown Manhattan by several direct subway lines running under the East River.",
        scenario:
            "Brooklyn Heights clients often want an initial online estimate before making the trip into Manhattan.",
        nearby: ["financial-district", "tribeca", "soho", "west-village", "chelsea", "downtown-jersey-city", "flatiron-district", "upper-east-side"],
    },
    hoboken: {
        slug: "hoboken",
        name: "Hoboken",
        region: "Hudson County, New Jersey",
        landmarks: ["Hoboken Terminal", "Pier A Park"],
        intro:
            "If you’re planning to sell Rolex Hoboken, InstaGold provides a professional appraisal and an immediate, transparent offer at our 47th Street office across the river.",
        travel:
            "Hoboken connects to Midtown Manhattan by PATH and rail services from Hoboken Terminal.",
        scenario:
            "Hoboken clients commonly request a preliminary quote online, then visit once to complete the transaction in a single appointment.",
        nearby: ["downtown-jersey-city", "financial-district", "chelsea", "hudson-yards", "west-village", "tribeca", "soho", "brooklyn-heights"],
    },
    "downtown-jersey-city": {
        slug: "downtown-jersey-city",
        name: "Downtown Jersey City",
        region: "Hudson County, New Jersey",
        landmarks: ["Exchange Place", "Grove Street"],
        intro:
            "If you’re planning to sell Rolex Downtown Jersey City, InstaGold offers certified expertise and a clear, no-obligation offer at our 47th Street office in Manhattan.",
        travel:
            "Downtown Jersey City connects to Manhattan via PATH services from Exchange Place and Grove Street.",
        scenario:
            "Jersey City clients often sell a single significant piece and value a secure, in-person transaction over shipping a watch away.",
        nearby: ["hoboken", "financial-district", "tribeca", "soho", "chelsea", "hudson-yards", "west-village", "brooklyn-heights"],
    },
    "midtown-east": {
        slug: "midtown-east",
        name: "Midtown East",
        region: "Manhattan, New York",
        landmarks: ["Grand Central Terminal", "Bryant Park"],
        intro:
            "If you’re planning to sell Rolex Midtown East, InstaGold is a short walk away, offering expert valuation and immediate payment on acceptance.",
        travel:
            "Midtown East is walking distance from our 47th Street office, close to Grand Central Terminal and Bryant Park.",
        scenario:
            "Midtown East clients often walk in during the working day for a same-visit appraisal.",
        nearby: ["upper-east-side", "flatiron-district", "hudson-yards", "chelsea", "upper-west-side", "west-village", "tribeca", "financial-district"],
    },
    "upper-west-side": {
        slug: "upper-west-side",
        name: "Upper West Side",
        region: "Manhattan, New York",
        landmarks: ["Lincoln Center", "Central Park West"],
        intro:
            "If you’re planning to sell Rolex Upper West Side, InstaGold provides a private, certified appraisal and a transparent offer at our 47th Street office.",
        travel:
            "The Upper West Side runs directly into Midtown along Broadway and the west-side subway lines.",
        scenario:
            "Upper West Side clients often bring family pieces and want the valuation explained in plain terms.",
        nearby: ["upper-east-side", "midtown-east", "hudson-yards", "chelsea", "flatiron-district", "west-village", "tribeca", "financial-district"],
    },
};

export const DEFAULT_LOCALITY_SLUG = "financial-district";

export function getLocality(slug: string): Locality | undefined {
    return LOCALITIES[slug];
}