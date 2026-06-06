'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { GALLERY } from '@/lib/data'
import { Reveal } from './motion-primitives'

export function Gallery() {
  return (
    <section id="gallery" className="bg-coffee px-5 py-24 text-cream lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Gallery
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            A taste of the Mandy moment
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-coffee/0 transition-colors duration-300 group-hover:bg-coffee/40" />
              <span className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
