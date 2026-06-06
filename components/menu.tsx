'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { MENU } from '@/lib/data'
import { Reveal } from './motion-primitives'
import { cn } from '@/lib/utils'

export function Menu() {
  const [active, setActive] = useState(MENU[0].category)
  const current = MENU.find((c) => c.category === active) ?? MENU[0]

  return (
    <section id="menu" className="bg-secondary/40 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Menu
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Crafted to be savored
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            From bold espresso to refreshing smoothies and golden samosas —
            every item is made fresh with care.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {MENU.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActive(cat.category)}
                className={cn(
                  'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300',
                  active === cat.category
                    ? 'bg-coffee text-cream shadow-lg dark:bg-gold dark:text-coffee'
                    : 'bg-card text-muted-foreground hover:text-foreground',
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.items.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-coffee/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-sm font-bold text-coffee shadow-lg">
                    {item.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
