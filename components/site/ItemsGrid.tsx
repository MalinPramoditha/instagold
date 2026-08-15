import { SITE } from "@/app/data/site";


export function ItemsGrid({ models, note }: { models: { name: string; href: string }[]; note?: string }) {
    return (
        <div>
            <ul className="flex flex-wrap gap-2">
                {models.map((m) => (
                    <li key={m.name}>
                        <a
                            href={m.href}
                            className="inline-flex min-h-11 items-center rounded-md border border-hairline bg-card px-4 text-base transition-colors hover:border-link hover:text-link"
                        >
                            {m.name}
                        </a>
                    </li>
                ))}
            </ul>
            {note ? <p className="mt-4 text-sm text-muted-foreground">{note}</p> : null}
        </div>
    );
}