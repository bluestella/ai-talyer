import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from './Container'
import logoUrl from '../img/aitalyer.png'

export function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="AI.Talyer home">
            <img src={logoUrl} alt="AI.Talyer" className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link
              to="/"
              className={
                pathname === '/'
                  ? 'text-white'
                  : 'text-steel hover:text-white transition-colors'
              }
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={
                pathname === '/contact'
                  ? 'text-white'
                  : 'text-steel hover:text-white transition-colors'
              }
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink hover:bg-accent/90 transition-colors"
            >
              Request a Quote
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-steel hover:text-white transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-white/10 bg-surface p-4">
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-steel hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="text-steel hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex w-fit rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink hover:bg-accent/90 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
