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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="956c973a-38b1-4f72-aa4b-7004187ffbe2" />

      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={fields.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={fields.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell us about your property</label>
        <textarea
          id="message"
          name="message"
          required
          value={fields.message}
          onChange={handleChange}
        />
      </div>

      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <button type="submit" className="btn-primary form-submit">Request a Free Quote</button>
    </form>
  )
}

function BoldHome() {
  return (
    <div>
      {/* ── Header ── */}
      <header className="sticky top-0 z-50">
        <nav>
          <div className="logo">🌿 BOLD</div>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bold Property Maintenance</h1>
          <p>Professional lawn and garden care in the Manawatu area</p>
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section id="services" className="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="services-grid">
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
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Bold</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>Bold Property Maintenance was founded on a simple belief: every property deserves to look its best!</p>
              <p>We are a locally-owned maintenance business that combines professional, high-quality service with genuine community commitment.</p>
              <p>When you choose Bold, you're supporting a local family business with strong ties to the wider community.</p>
            </div>
            <div className="about-box">
              <h4>Why Choose Us?</h4>
              <ul>
                {[
                  'Fully insured & compliant',
                  'Professional & experienced',
                  'Local community focus',
                  'Flexible scheduling',
                  'Competitive pricing',
                ].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Bold</h3>
              {[
                { icon: '📞', label: 'Phone', value: '022 6055 453' },
                { icon: '✉️', label: 'Email', value: 'boldpropertymaintenance@gmail.com' },
                { icon: '📍', label: 'Service Area', value: 'Palmerston North & Manawatu Area' },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>&copy; 2026 Bold Property Maintenance. All rights reserved.</p>
        <p className="footer-secondary">NZBN: 9429053659002 | Public Liability Insurance: BIZ129925</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Health & Safety</a>
        </div>
      </footer>
    </div>
  )
}
