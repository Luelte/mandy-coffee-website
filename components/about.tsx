'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Coffee, Users, Leaf } from 'lucide-react'
import { Reveal } from './motion-primitives'

const galleryStrip = [
  { src: '/images/gallery-latteart.png', alt: 'Latte art' },
  { src: '/images/gallery-beans.png', alt: 'Roasted beans' },
  { src: '/images/menu-pastry.png', alt: 'Fresh pastries' },
  { src: '/images/iced-mocha.jpg', alt: 'Iced mocha' },
]

const pillars = [
  { icon: Coffee, label: 'Specialty Ethiopian beans' },
  { icon: Users, label: 'Warm community hospitality' },
  { icon: Leaf, label: 'Freshly crafted, every day' },
]

export function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-coffee/20">
              <Image
                src="/images/about.png"
                alt="Mandy Coffee barista crafting coffee in a warm café"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-gold/30 bg-card/95 p-5 shadow-xl backdrop-blur sm:-right-8"
            >
              <p className="font-heading text-3xl font-bold text-gold">4.9★</p>
              <p className="text-xs font-medium text-muted-foreground">
                from 40+ reviews
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Story
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              A cozy corner of Addis, brewed with heart
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Mandy Coffee is a cozy neighborhood café serving carefully
                crafted Ethiopian coffee, fresh snacks, samosas, smoothies, and
                refreshing drinks in the heart of Addis Ababa.
              </p>
              <p>
                Whether you&apos;re grabbing your morning espresso or meeting
                friends for an afternoon coffee, Mandy Coffee offers a warm
                atmosphere and exceptional hospitality — proudly women-owned and
                rooted in authentic Ethiopian coffee culture.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {pillars.map((p) => (
                <li key={p.label} className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-gold">
                    <p.icon className="size-5" />
                  </span>
                  <span className="font-medium text-foreground">{p.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 grid grid-cols-4 gap-3">
              {galleryStrip.map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
