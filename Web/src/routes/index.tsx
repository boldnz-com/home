import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: BoldHome,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-800 rounded-lg p-6 text-center">
        <div className="text-3xl mb-2">✓</div>
        <h3 className="text-xl font-bold mb-1">Thanks for reaching out!</h3>
        <p>We'll be in touch with your free quote soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      {/* honeypot */}
      <input type="hidden" name="bot-field" />

      {error && (
        <p className="text-red-300 mb-4">
          Something went wrong. Please try emailing us directly.
        </p>
      )}

      <div className="mb-5">
        <label className="block font-semibold mb-1" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="mb-5">
        <label className="block font-semibold mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="mb-5">
        <label className="block font-semibold mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={fields.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1" htmlFor="message">
          Tell us about your property
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded text-gray-800 resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <button
        type="submit"
        className="bg-[#7cb342] hover:bg-[#9ccc65] text-white font-semibold px-8 py-3 rounded transition-colors duration-200 cursor-pointer"
      >
        Request a Free Quote
      </button>
    </form>
  )
}

function BoldHome() {
  return (
    <div className="font-sans text-gray-800">
      {/* ── Header ── */}
      <header className="bg-[#1a4d2e] text-white sticky top-0 z-50 shadow-md">
        <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">🌿 BOLD</div>
          <ul className="flex gap-8 list-none">
            <li>
              <a href="#services" className="hover:text-[#7cb342] transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#7cb342] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#7cb342] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        className="text-white py-24 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #2d7a3a 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Bold Property Maintenance</h1>
          <p className="text-xl mb-8 opacity-95">
            Professional lawn and garden care in the Manawatu area
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#7cb342] hover:bg-[#9ccc65] text-white font-semibold px-10 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1a4d2e] mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Lawn Mowing & Care',
                desc: 'Regular lawn mowing, edging, and maintenance to keep your property looking pristine year-round. We handle residential and commercial properties.',
              },
              {
                icon: '✂️',
                title: 'Hedge & Tree Trimming',
                desc: 'Professional hedge trimming and edge work to maintain clean lines and healthy plants. We use modern equipment for precise results.',
              },
              {
                icon: '🍃',
                title: 'General Garden Maintenance',
                desc: 'Leaf blowing, debris removal, and general tidying services. Perfect for keeping your outdoor spaces clean and well-maintained.',
              },
              {
                icon: '📅',
                title: 'Seasonal Packages',
                desc: "Flexible monthly or seasonal maintenance plans tailored to your property's needs. Save money with ongoing service agreements.",
              },
              {
                icon: '🏢',
                title: 'Commercial Properties',
                desc: 'Reliable maintenance for investment properties, rental homes, and commercial developments. Fast, professional, and fully insured.',
              },
              {
                icon: '⚡',
                title: 'Quick Turnarounds',
                desc: 'We pride ourselves on fast, reliable service. Same-week scheduling available for most requests.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-8 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#1a4d2e] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a4d2e] mb-10">About Bold</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bold Property Maintenance was founded on a simple belief: every property
                deserves to look its best!
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a locally-owned maintenance business that combines professional,
                high-quality service with genuine community commitment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you choose Bold, you're supporting a local family business with
                strong ties to the wider community.
              </p>
            </div>

            <div className="bg-[#e8f5e9] border-l-4 border-[#7cb342] rounded-md p-8">
              <h4 className="font-bold text-[#1a4d2e] mb-2">Our Mission</h4>
              <p className="text-[#2d5016] font-semibold mb-5">
                To provide bold, reliable property maintenance while empowering young New
                Zealanders to develop skills, confidence, and sustainable careers.
              </p>
              <h4 className="font-bold text-[#1a4d2e] mb-3">Why Choose Us?</h4>
              <ul className="space-y-1 text-[#2d5016]">
                {[
                  'Fully insured & compliant',
                  'Professional & experienced',
                  'Local community focus',
                  'Flexible scheduling',
                  'Competitive pricing',
                  'Health & Safety certified',
                ].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-[#1a4d2e] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold">Contact Bold</h3>
              {[
                { icon: '📞', label: 'Phone', value: '022 6055 453' },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'Joel@boldmaintenance.co.nz',
                },
                {
                  icon: '📍',
                  label: 'Service Area',
                  value: 'Palmerston North & Manawatu Area',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold mb-0.5">{item.label}</h4>
                    <p className="opacity-90">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0d2818] text-white text-center py-8 px-4">
        <p className="mb-1">
          &copy; 2026 Bold Property Maintenance. All rights reserved.
        </p>
        <p className="mb-3 opacity-75 text-sm">
          NZBN: 9429053659002 | Public Liability Insurance: TBC
        </p>
        <div className="flex justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Health & Safety'].map((link) => (
            <a key={link} href="#" className="text-[#7cb342] hover:underline text-sm">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
