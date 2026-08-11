
import { Container } from "../ui"

export function RateSection({ data }: any) {
    return (
        <div className="border-y border-hairline bg-surface-light">
            <Container>
                <ul className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {data.map((rate: any) => (
                        <li key={rate.metal} className="px-4 py-5 text-center">
                            <p className="eyebrow">{rate.metal}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{rate.note}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}