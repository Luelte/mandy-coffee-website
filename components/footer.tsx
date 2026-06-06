import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/data'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-coffee px-5 pb-8 pt-16 text-cream lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative size-11 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image
                  src="/images/logo.jpg"
                  alt="Mandy Coffee logo"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="font-heading text-xl font-bold">Mandy Coffee</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {SITE.tagline} Women-owned, brewed with heart in Addis Ababa.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={SITE.phoneHref} className="hover:text-cream">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {[InstagramIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-coffee"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
            <p className="mt-5 font-serif text-base italic text-cream/60">
              &ldquo;Proudly serving Ethiopia&apos;s finest coffee.&rdquo;
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-center text-xs text-cream/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Mandy Coffee. All rights reserved.
          </p>
          <p>Made with care in Addis Ababa, Ethiopia.</p>
        </div>
      </div>
    </footer>
  )
}
