'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Star, MapPin, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/data'

const beans = [
  { left: '8%', top: '22%', size: 14, delay: 0, dur: 7 },
  { left: '18%', top: '70%', size: 10, delay: 1.2, dur: 9 },
  { left: '78%', top: '30%', size: 16, delay: 0.6, dur: 8 },
  { left: '88%', top: '64%', size: 11, delay: 2, dur: 10 },
  { left: '64%', top: '78%', size: 9, delay: 1.6, dur: 7.5 },
  { left: '34%', top: '14%', size: 12, delay: 0.4, dur: 9.5 },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/images/hero.png"
          alt="Artisan espresso being poured at Mandy Coffee"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-coffee/70 via-coffee/50 to-coffee/90"
      />

      {/* floating beans */}
      {beans.map((b, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-gold/30 blur-[1px]"
          style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        style={{ y: contentY }}
        className="mx-auto w-full max-w-3xl px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-dark rounded-3xl p-8 sm:p-12"
        >
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            <Star className="size-3.5 fill-gold text-gold" />
            Rated {SITE.rating} by our customers
          </span>

          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Addis Ababa&apos;s Favorite Coffee Experience
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
            Fresh Ethiopian coffee, handcrafted snacks, smoothies, and a
            welcoming atmosphere — every single day.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-coffee shadow-xl shadow-gold/25 transition-transform hover:scale-105 sm:w-auto"
            >
              View Menu
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              <MapPin className="size-4" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
            className="h-2 w-1 rounded-full bg-cream/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
