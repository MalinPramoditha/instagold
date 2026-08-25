"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { SITE } from "../data/site";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const hasChecked = useRef(false);

    useEffect(() => {
        if (hasChecked.current) return;
        hasChecked.current = true;

        const status = sessionStorage.getItem('form_submitted');

        if (status !== 'true') {
            router.replace("/");
            return;
        }

        sessionStorage.removeItem('form_submitted');
    }, []);


    return (
        <main className="flex justify-center items-center h-[calc(100vh-100px)]">
            <div
                className="rounded-xl border border-hairline bg-card p-7 text-center shadow-sm"
                role="status"
                aria-live="polite"
            >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-surface-light text-link">
                    <Check aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-4 text-xl">Your request has been received</h3>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                    A specialist will review your request and reply with a preliminary range, usually
                    the same business day. Prefer to speak now?{" "}
                    <a
                        href={SITE.phoneHref}
                        className="font-medium text-link underline underline-offset-4"
                    >
                        Call {SITE.phone}
                    </a>
                    .
                </p>
            </div>
        </main>
    );
}