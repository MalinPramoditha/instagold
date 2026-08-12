"use server"

export const allRates = async () => {
    const goldResponse = await fetch('https://api.gold-api.com/price/XAU/USD', { next: { revalidate: 35 } })
    const silverResponse = await fetch('https://api.gold-api.com/price/XAG/USD', { next: { revalidate: 35 } });
    const platinumResponse = await fetch('https://api.gold-api.com/price/XPT/USD', { next: { revalidate: 35 } });

    const gold = await goldResponse.json();
    const silver = await silverResponse.json();
    const platinum = await platinumResponse.json();


    console.log(goldResponse)

    if (!gold || !silver || !platinum) {
        return { message: 'Failed to fetch prices', status: 500 }
    }


    return { gold, silver, platinum }
}
