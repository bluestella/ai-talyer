import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../components/Container'
import { Nav } from '../components/Nav'
import { getSupabaseClient } from '../utils/supabaseClient'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email.'
  }

  return errors
}

export function Contact() {
  const { pathname } = useLocation()
  const supabase = useMemo(() => getSupabaseClient(), [])
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState<string>('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMsg('Please fix the highlighted fields.')
      return
    }

    if (!supabase) {
      setStatus('error')
      setStatusMsg('Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in your environment.')
      return
    }

    setStatus('loading')
    setStatusMsg('Sending…')

    const { error } = await supabase.rpc('submit_lead', {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: values.message.trim(),
      source_page: pathname
    })

    if (error) {
      setStatus('error')
      setStatusMsg(error.message || 'Something went wrong. Please try again.')
      return
    }

    setStatus('success')
    setStatusMsg('Thanks — your message has been sent. We will get back to you soon.')
    setValues({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl tracking-tight lg:text-5xl">Contact Us</h1>
              <p className="mt-4 text-lg text-steel">
                Tell us what you want to build. We will reply with suggested materials, concepts, and timelines.
              </p>

              <form onSubmit={onSubmit} className="mt-10 space-y-6" aria-describedby="form-status">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold text-white">Name</label>
                    <input
                      id="name"
                      value={values.name}
                      onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                      className={
                        'mt-2 w-full rounded-2xl border bg-surface px-4 py-3 text-white outline-none transition-colors ' +
                        (errors.name ? 'border-red-400/60 focus:border-red-400' : 'border-white/10 focus:border-accent')
                      }
                      autoComplete="name"
                    />
                    {errors.name ? <p className="mt-2 text-sm text-red-300">{errors.name}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-white">Email</label>
                    <input
                      id="email"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      className={
                        'mt-2 w-full rounded-2xl border bg-surface px-4 py-3 text-white outline-none transition-colors ' +
                        (errors.email ? 'border-red-400/60 focus:border-red-400' : 'border-white/10 focus:border-accent')
                      }
                      autoComplete="email"
                      inputMode="email"
                    />
                    {errors.email ? <p className="mt-2 text-sm text-red-300">{errors.email}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-white">Phone (optional)</label>
                  <input
                    id="phone"
                    value={values.phone}
                    onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-white">Message</label>
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className={
                      'mt-2 min-h-[140px] w-full resize-none rounded-2xl border bg-surface px-4 py-3 text-white outline-none transition-colors ' +
                      (errors.message ? 'border-red-400/60 focus:border-red-400' : 'border-white/10 focus:border-accent')
                    }
                  />
                  {errors.message ? <p className="mt-2 text-sm text-red-300">{errors.message}</p> : null}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink hover:bg-accent/90 disabled:opacity-60 transition-colors"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send message'}
                  </button>

                  <p className="text-sm text-steel">
                    By submitting, you agree we may contact you about your inquiry.
                  </p>
                </div>

                <div id="form-status" aria-live="polite" className="text-sm">
                  {status === 'idle' ? null : (
                    <div
                      className={
                        'rounded-2xl border px-4 py-3 ' +
                        (status === 'success'
                          ? 'border-green-400/40 bg-green-400/10 text-green-200'
                          : status === 'error'
                            ? 'border-red-400/40 bg-red-400/10 text-red-200'
                            : 'border-white/10 bg-white/5 text-steel')
                      }
                    >
                      {statusMsg}
                    </div>
                  )}
                </div>
              </form>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-surface p-8">
              <h2 className="text-xl font-semibold">Direct contact</h2>
              <p className="mt-3 text-steel">Prefer email or a quick call? Add your business contact details here.</p>

              <div className="mt-6 space-y-4 text-steel">
                <div>
                  <p className="text-sm text-white">Email</p>
                  <p className="mt-1">hello@aitalyer.com</p>
                </div>
                <div>
                  <p className="text-sm text-white">Phone</p>
                  <p className="mt-1">+63 (replace with your number)</p>
                </div>
                <div>
                  <p className="text-sm text-white">Location</p>
                  <p className="mt-1">Philippines</p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">What happens next</p>
                <p className="mt-2 text-steel">
                  We review your request, recommend suitable aviation materials, and outline an initial concept and quote.
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                >
                  Back to home →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  )
}
