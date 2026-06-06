'use client'

import { Star, Quote } from 'lucide-react'
import { REVIEWS } from '@/lib/data'
import { Reveal } from './motion-primitives'

export function Reviews() {
  return (
    <section id="reviews" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Loved by Locals
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What our guests are saying
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              4.9 / 5 average rating
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.author} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">
                <Quote className="size-9 text-gold/30" />
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border/60 pt-4">
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
