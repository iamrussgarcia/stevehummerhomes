'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdEmail, MdPhone, MdSend, MdVerified, MdAccessTime, MdSupportAgent, MdHandshake, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from '@/styles/Contact.module.css';

const assurances = [
  { icon: MdVerified, title: 'Licensed Professional', desc: 'Fully licensed and certified real estate agent' },
  { icon: MdAccessTime, title: 'Quick Response', desc: 'We respond to all inquiries within 24 hours' },
  { icon: MdHandshake, title: 'No Pressure', desc: 'Free consultation with zero obligation' },
  { icon: MdSupportAgent, title: 'Expert Guidance', desc: 'Personalized support every step of the way' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: FaXTwitter, label: 'X (Twitter)' },
  { href: 'https://tiktok.com', icon: FaTiktok, label: 'TikTok' },
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="page-hero-title" style={{ marginTop: '0.75rem' }}>Get In Touch</h1>
          <p className="page-hero-subtitle">
            Ready to start your real estate journey? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* =========================================================
          CONTACT LAYOUT
          ========================================================= */}
      <section id="contact-main" className="section-padding" style={{ background: 'var(--color-off-white)' }} aria-label="Contact form and information">
        <div className="container">
          <div className={styles.contactLayout}>

            {/* Contact Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Fill out the form below and Steve will get back to you within 24 hours.
              </p>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      className="form-input"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className="form-input"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail" className="form-label">Email Address *</label>
                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactPhone" className="form-label">Phone Number</label>
                    <input
                      id="contactPhone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="form-input"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`form-group ${styles.formGridFull}`}>
                    <label htmlFor="contactSubject" className="form-label">I&apos;m Interested In</label>
                    <select
                      id="contactSubject"
                      name="subject"
                      className="form-input"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling My Home</option>
                      <option value="investing">Investment Properties</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={`form-group ${styles.formGridFull}`}>
                    <label htmlFor="contactMessage" className="form-label">Message *</label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      required
                      placeholder="Tell us about your real estate needs, timeline, budget, or any questions you have..."
                      className="form-input"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className={styles.submitBtn}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>Sending...</>
                  ) : (
                    <><MdSend size={18} /> Send Message</>
                  )}
                </button>

                {success && (
                  <div className={styles.successMessage} role="status">
                    ✓ Thank you! Your message has been sent. Steve will be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Info column */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}>
                  <MdPhone size={22} />
                </div>
                <div className={styles.infoCardText}>
                  <p className={styles.infoCardLabel}>Phone</p>
                  <a href="tel:5414014456" className={styles.infoCardValue}>(541) 401-4456</a>
                  <p className={styles.infoCardNote}>Mon – Fri, 8am – 7pm</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}>
                  <MdEmail size={22} />
                </div>
                <div className={styles.infoCardText}>
                  <p className={styles.infoCardLabel}>Email</p>
                  <a href="mailto:stevehummerhomes@gmail.com" className={styles.infoCardValue}>stevehummerhomes@gmail.com</a>
                  <p className={styles.infoCardNote}>We reply within 24 hours</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardIcon}>
                  <MdLocationOn size={22} />
                </div>
                <div className={styles.infoCardText}>
                  <p className={styles.infoCardLabel}>Office</p>
                  <p className={styles.infoCardValue}>1100 Pacific Blvd SE<br />Albany, OR, 97321</p>
                </div>
              </div>

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '250px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=1100%20Pacific%20Blvd%20SE%20Albany%2C%20OR%2C%2097321&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Steve Hummer Homes Office Location"
                ></iframe>
              </div>

              {/* Social links */}
              <div className={styles.socialCard}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={`Follow us on ${s.label}`}
                      id={`contact-social-${s.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      <s.icon size={15} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* IDX CTA card */}
              <div style={{
                background: 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>
                  Ready to Browse Homes?
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(11,29,58,0.75)', marginBottom: '1.25rem' }}>
                  Search active MLS listings now.
                </p>
                <Link href="/listings" className="btn btn-navy" id="contact-listings-cta" style={{ width: '100%', justifyContent: 'center' }}>
                  View All Listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ASSURANCE STRIP
          ========================================================= */}
      <section id="contact-assurance" className={styles.assuranceSection} aria-label="Why contact us">
        <div className="container">
          <div className={styles.assuranceGrid}>
            {assurances.map((a) => (
              <div key={a.title} className={styles.assuranceItem}>
                <div className={styles.assuranceIcon}>
                  <a.icon size={22} />
                </div>
                <h4 className={styles.assuranceTitle}>{a.title}</h4>
                <p className={styles.assuranceDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
