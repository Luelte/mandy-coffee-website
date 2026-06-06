'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Star, MessageCircle, Coffee, Heart } from 'lucide-react'
import { Reveal } from './motion-primitives'

const stats = [
  { icon: Star, value: 4.9, suffix: '★', label: 'Google Rating', decimals: 1 },
  { icon: MessageCircle, value: 40, suffix: '+', label: 'Happy Reviews', decimals: 0 },
  { icon: Coffee, value: 100, suffix: '%', label: 'Ethiopian Coffee', decimals: 0 },
  { icon: Heart, value: 0, suffix: '', label: 'Women-Owned', text: 'Proudly' },
]

function Counter({
  value,
  decimals,
  suffix,
}: {
  value: number
  decimals: number
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-20 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="group h-full rounded-3xl border border-border/60 bg-card p-6 text-center shadow-xl shadow-coffee/5 transition-transform duration-300 hover:-translate-y-1.5 lg:p-8">
              <span className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-coffee">
                <stat.icon className="size-6" />
              </span>
              <div className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                {stat.text ? (
                  stat.text
                ) : (
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
