"use client"
import { useId, useRef, useState } from "react";
import { Check, ChevronDown, Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/app/data/site";

import { usePathname } from "next/navigation";
import { submitOffer } from "@/app/services/email-submission-actions";

const CATEGORIES = ["Gold", "Diamonds", "Watches", "Jewelry", "Other"] as const;

const fieldClass =
    "mt-1.5 min-h-12 w-full rounded-md border bg-card px-3 text-base text-foreground placeholder:text-muted-foreground";



export function OfferForm({
    initialCategory = "Gold",
    compact = false,
    defaultOpen = false,
}: {
    initialCategory?: string;
    compact?: boolean;
    defaultOpen?: boolean;
}) {
    const baseId = useId();
    const started = useRef(false);
    const [open, setOpen] = useState(defaultOpen);
    const [category, setCategory] = useState<string>(initialCategory);
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

    function markStarted() {
        if (!started.current) {
            started.current = true;

        }
    }

    async function submit() {
        const next: { name?: string; contact?: string } = {};
        if (!name.trim()) next.name = "Please enter your name.";
        if (contact.trim().length < 6) next.contact = "Please enter your email or phone number.";
        setErrors(next);
        if (Object.keys(next).length) return;

        const res = await submitOffer({ name, email: contact, phone: contact, category, description });
        setLoading(false);
        if (res.error) {
            setLoading(false);
            console.log(res.error);
            setErrors({ contact: res.error });
        } else {
            setDone(true);
            setLoading(false);
        }
    }

    if (done) {
        return (
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
                    A specialist will review your {category.toLowerCase()} and reply with a preliminary range, usually
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
        );
    }

    return (
        <div className={cn("rounded-xl border border-hairline bg-card shadow-sm", compact ? "p-5 sm:p-6" : "p-6 sm:p-8")}>
            <button
                type="button"
                aria-expanded={open}
                aria-controls={`${baseId}-panel`}
                onClick={() => {
                    setOpen((v) => !v);
                    markStarted();
                }}
                className="flex w-full items-center justify-between gap-4 text-left"
            >
                <span>
                    <span className="block text-lg font-semibold">Get your free offer</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                        One step, under a minute. No obligation to sell.
                    </span>
                </span>
                <ChevronDown
                    aria-hidden="true"
                    className={cn("size-5 shrink-0 text-link transition-transform", open && "rotate-180")}
                />
            </button>

            {open ? (
                <form
                    id={`${baseId}-panel`}
                    className="mt-6 border-t border-hairline pt-6"
                    onFocus={markStarted}
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                    }}
                >
                    <fieldset>
                        <legend className="text-sm font-medium text-foreground">What are you selling?</legend>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {CATEGORIES.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    aria-pressed={category === c}
                                    onClick={() => {
                                        setCategory(c);

                                    }}
                                    className={cn(
                                        "min-h-11 rounded-md border px-4 text-sm font-medium transition-colors",
                                        category === c
                                            ? "border-brand bg-brand text-ink"
                                            : "border-hairline hover:border-link hover:text-link",
                                    )}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </fieldset>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <Field id={`${baseId}-name`} label="Full name" value={name} onChange={setName} error={errors.name} required autoComplete="name" />
                        <Field
                            id={`${baseId}-contact`}
                            label="Email or phone"
                            value={contact}
                            onChange={setContact}
                            error={errors.contact}
                            required
                            autoComplete="email"
                        />
                        <div className="sm:col-span-2">
                            <label htmlFor={`${baseId}-desc`} className="text-sm font-medium text-foreground">
                                Weight, karat or short description (optional)
                            </label>
                            <input
                                id={`${baseId}-desc`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="e.g. 60g of 14k chains and two Krugerrands"
                                className={cn(fieldClass, "border-hairline")}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-ink transition-colors hover:bg-brand-hover"
                    >
                        Get My Free Offer
                    </button>

                    <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <Lock aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                        Your information remains private and there is no obligation to sell.
                    </p>
                </form>
            ) : (
                <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                        setOpen(true);
                        markStarted();
                    }}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-ink transition-colors hover:bg-brand-hover"
                >
                    {loading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                    ) : "Get My Free Offer"}

                </button>
            )}
        </div>
    );
}

function Field({
    id,
    label,
    value,
    onChange,
    type = "text",
    error,
    required,
    autoComplete,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    error?: string | undefined;
    required?: boolean | undefined;
    autoComplete?: string;
}) {
    return (
        <div>
            <label htmlFor={id} className="text-sm font-medium text-foreground">
                {label}
                {required ? <span aria-hidden="true"> *</span> : null}
            </label>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                value={value}
                required={required}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                onChange={(e) => onChange(e.target.value)}
                className={cn(fieldClass, error ? "border-destructive" : "border-hairline")}
            />
            {error ? (
                <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
