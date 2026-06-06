'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Check, Send } from 'lucide-react'
import { Reveal } from './motion-primitives'

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+251 ...' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-secondary/40" />
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Send us a message
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
            Questions, catering, or just want to say hi? We&apos;d love to hear
            from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[2rem] border border-border/60 bg-card/80 p-7 shadow-xl backdrop-blur sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f, i) => (
                <div
                  key={f.id}
                  className={f.id === 'phone' ? 'sm:col-span-2' : ''}
                >
                  <label
                    htmlFor={f.id}
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.id !== 'phone'}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-gold focus:ring-4 focus:ring-gold/15"
                  />
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us what's on your mind..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-gold focus:ring-4 focus:ring-gold/15"
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-coffee py-4 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-coffee/90 dark:bg-gold dark:text-coffee dark:hover:bg-gold/90"
            >
              {sent ? (
                <>
                  <Check className="size-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
