import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import React from 'react'

export const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mt-4 text-base text-md leading-relaxed text-muted-foreground">
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-10 text-lg font-bold tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-8 text-lg md:text-xl font-semibold text-foreground">
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex gap-3">
        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined
      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="font-medium text-foreground underline decoration-2 decoration-accent-soft underline-offset-4 hover:decoration-link"
        >
          {children}
        </Link>
      )
    },
  },
}