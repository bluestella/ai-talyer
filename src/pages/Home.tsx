import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Nav } from '../components/Nav'
import showcaseLogo from '../img/aitalyer.png'
import showcaseTamps from '../img/tamps.jpg'
import showcaseGrace from '../img/grace.jpg'
import showcaseYans from '../img/yans.jpeg'

export function Home() {
  const gallery = useMemo(
    () => [showcaseLogo, showcaseTamps, showcaseGrace, showcaseYans],
    []
  )

  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/25 via-white/10 to-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 right-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-white/10 to-accent/25 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-steel">
                Philippines • AI-powered design & fabrication
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight lg:text-7xl">
                Retired aircraft.
                <span className="block text-accent">Reimagined.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
                AI.Talyer transforms retired aircraft and aviation waste into premium lifestyle products, bespoke corporate gifts, and curated material packs for designers.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink hover:bg-accent/90 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="#value"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 bg-surface px-5 py-4">
                  <p className="text-sm text-steel">Value uplift</p>
                  <p className="mt-1 text-2xl font-semibold">3–10×</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface px-5 py-4">
                  <p className="text-sm text-steel">Material story</p>
                  <p className="mt-1 text-2xl font-semibold">Traceable</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface px-5 py-4">
                  <p className="text-sm text-steel">Design</p>
                  <p className="mt-1 text-2xl font-semibold">AI-aided</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 shadow-soft">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.18),transparent_55%)]" />
                <div className="relative h-full p-8">
                  <p className="text-sm text-steel">From scrap to signature</p>
                  <h2 className="mt-3 text-2xl font-semibold">Aviation-grade materials</h2>
                  <p className="mt-3 text-steel">Aluminum, fabric, leather, and components, curated and re-engineered into products with a provenance story.</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-steel">Premium lifestyle</p>
                      <p className="mt-2 font-semibold">Bags • Furniture • Décor</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-steel">Corporate gifting</p>
                      <p className="mt-2 font-semibold">Bespoke • Branded</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-steel">Material packs</p>
                      <p className="mt-2 font-semibold">For designers & schools</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-steel">Impact</p>
                      <p className="mt-2 font-semibold">Less waste, more value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="value" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl tracking-tight">Why AI.Talyer</h2>
              <p className="mt-4 text-lg text-steel">
                Aircraft retirement and maintenance creates massive volumes of scrap and decommissioned materials. We turn these into high-value, story-rich products.
              </p>
              <ul className="mt-8 space-y-4 text-steel">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Material intelligence: AI helps match material properties to product use-cases.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Premium execution: design-to-fabrication workflow with craft-level finishing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Value uplift: upcycling delivers 3–10× greater value than disposal.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface p-8">
              <h3 className="text-xl font-semibold">Three product lines</h3>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-steel">Premium lifestyle</p>
                  <p className="mt-1 text-lg font-semibold">Bags, furniture, décor</p>
                  <p className="mt-2 text-steel">Built from aviation-grade materials with a provenance story.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-steel">Corporate & aviation gifts</p>
                  <p className="mt-1 text-lg font-semibold">Bespoke for brands & airlines</p>
                  <p className="mt-2 text-steel">Perfect for campaigns, events, and loyalty programs.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-steel">Sustainable material packs</p>
                  <p className="mt-1 text-lg font-semibold">Curated raw materials</p>
                  <p className="mt-2 text-steel">For designers, small businesses, and design schools.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl tracking-tight">Visual showcase</h2>
              <p className="mt-4 max-w-2xl text-lg text-steel">A premium aesthetic inspired by aviation: clean lines, metallic surfaces, and calm lighting.</p>
            </div>
            <Link to="/contact" className="hidden rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors lg:inline-flex">
              Build with us
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
                <img src={src} alt="AI.Talyer showcase" className="h-52 w-full object-cover object-top" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl tracking-tight">Ready to collaborate?</h2>
                <p className="mt-4 text-lg text-steel">Tell us what you need. We’ll respond with a shortlist of materials, concepts, and timelines.</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink hover:bg-accent/90 transition-colors">
                  Request a Quote
                </Link>
                <a href="#value" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors">
                  View offering
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10 py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-xl">AI.Talyer</p>
              <p className="mt-3 text-steel">AI-powered design & fabrication turning aircraft waste into premium goods.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Pages</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link to="/" className="text-steel hover:text-white transition-colors">Home</Link>
                <Link to="/contact" className="text-steel hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Get in touch</p>
              <div className="mt-4 flex flex-col gap-3 text-steel">
                <span>Philippines</span>
                <span>Replace with your email/phone</span>
              </div>
            </div>
          </div>
          <p className="mt-12 text-sm text-steel">© {new Date().getFullYear()} AI.Talyer. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  )
}
