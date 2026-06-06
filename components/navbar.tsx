'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV_LINKS, SITE } from '@/lib/data'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl'
          : 'py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative size-10 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/logo.jpg"
              alt="Mandy Coffee logo"
              fill
              className="object-cover"
              sizes="40px"
            />
          </span>
          <span
            className={cn(
              'font-heading text-lg font-bold tracking-tight transition-colors',
              scrolled ? 'text-foreground' : 'text-cream',
            )}
          >
            Mandy Coffee
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'group relative text-sm font-medium transition-colors',
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-cream/80 hover:text-cream',
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={cn(
              'grid size-10 place-items-center rounded-full border border-transparent transition-colors',
              scrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-cream hover:bg-white/10',
            )}
          >
            {theme === 'dark' ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>

          <a
            href="#menu"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-coffee shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:inline-block"
          >
            View Menu
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              'grid size-10 place-items-center rounded-full transition-colors lg:hidden',
              scrolled ? 'text-foreground' : 'text-cream',
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-coffee"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
