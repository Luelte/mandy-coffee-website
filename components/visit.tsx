'use client'

import { MapPin, Train, Clock, Phone, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/data'
import { Reveal } from './motion-primitives'

const info = [
  { icon: MapPin, label: 'Address', value: SITE.address },
  { icon: Train, label: 'Landmark', value: SITE.near },
  { icon: Clock, label: 'Hours', value: SITE.hours },
  { icon: Phone, label: 'Call us', value: SITE.phone, href: SITE.phoneHref },
]

export function Visit() {
  return (
    <section id="visit" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Visit Us
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Come say hello
          </h2>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground">
            Find us in the heart of Addis Ababa — perfect for your morning brew
            or an afternoon catch-up.
          </p>

          <ul className="mt-8 space-y-4">
            {info.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-foreground hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-105 dark:bg-gold dark:text-coffee"
          >
            Get Directions
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl"
          >
            <iframe
              title="Mandy Coffee location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.74%2C8.99%2C38.78%2C9.02&layer=mapnik&marker=9.005%2C38.76"
              className="h-full w-full grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-card/95 px-5 py-3 shadow-lg backdrop-blur">
              <div>
                <p className="font-heading font-bold text-foreground">
                  Mandy Coffee
                </p>
                <p className="text-xs text-muted-foreground">{SITE.address}</p>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-gold text-coffee">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
