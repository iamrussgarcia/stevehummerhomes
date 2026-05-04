'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdHome, MdEmail, MdPhone, MdChevronRight } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from '@/styles/Footer.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: 'https://www.cadwellrealtygroup.com/steve-hummer', label: 'Property Listings', external: true },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: 'https://www.cadwellrealtygroup.com/steve-hummer', label: 'Buy a Home', external: true },
  { href: 'https://www.cadwellrealtygroup.com/steve-hummer', label: 'Sell Your Home', external: true },
  { href: 'https://www.cadwellrealtygroup.com/steve-hummer', label: 'Investment Properties', external: true },
  { href: '/contact', label: 'Free Consultation', external: false },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: FaXTwitter, label: 'X (Twitter)' },
  { href: 'https://tiktok.com', icon: FaTiktok, label: 'TikTok' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerGrid}>

          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo} aria-label="Steve Hummer Homes">
              <div className={styles.footerLogoIcon} style={{ background: 'transparent' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/2.webp" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className={styles.footerLogoText}>
                <span className={styles.footerLogoName}>Steve Hummer Homes</span>
                <span className={styles.footerLogoTagline}>Agent #: 201241188</span>
              </div>
            </Link>
            <p className={styles.footerDescription}>
              Your trusted real estate partner — helping you find or sell your home with confidence, integrity, and ease.
            </p>
            {/* JMG Logo */}
            <div className={styles.jmgLogoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Powered by JMG-navy blue.webp" alt="Powered by JMG" />
            </div>
            <div className={styles.footerSocials} style={{ marginTop: '1rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerSocialLink}
                  aria-label={s.label}
                  id={`footer-social-${s.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className={styles.footerColumnTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  {link.external ? (
                    <a href={link.href} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                      <MdChevronRight size={14} />
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.footerLink}>
                      <MdChevronRight size={14} />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            {/* <h3 className={styles.footerColumnTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                      <MdChevronRight size={14} />
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.footerLink}>
                      <MdChevronRight size={14} />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact + Newsletter Column */}
          <div>
            <h3 className={styles.footerColumnTitle}>Get In Touch</h3>
            <div className={styles.footerContactItem}>
              <div className={styles.footerContactIcon}>
                <MdPhone size={15} />
              </div>
              <div className={styles.footerContactText}>
                <span className={styles.footerContactLabel}>Phone</span>
                <a href="tel:5414014456" className={styles.footerContactValue}>(541) 401-4456</a>
              </div>
            </div>
            <div className={styles.footerContactItem}>
              <div className={styles.footerContactIcon}>
                <MdEmail size={15} />
              </div>
              <div className={styles.footerContactText}>
                <span className={styles.footerContactLabel}>Email</span>
                <a href="mailto:stevehummerhomes@gmail.com" className={styles.footerContactValue}>stevehummerhomes@gmail.com</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.footerNewsletter} style={{ marginTop: '1.5rem' }}>
              <h4 className={styles.footerColumnTitle}>Newsletter</h4>
              {subscribed ? (
                <p style={{ color: 'var(--color-gold)', fontSize: '0.875rem' }}>
                  ✓ Thank you for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.footerNewsletterForm} id="footer-newsletter-form">
                  <p className={styles.footerNewsletterText}>Stay updated with the latest listings and market news.</p>
                  <input
                    type="email"
                    id="footer-newsletter-email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.footerNewsletterInput}
                  />
                  <button type="submit" className={styles.footerNewsletterBtn} id="footer-newsletter-submit">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p className={styles.footerCopyright}>
            © {currentYear} <span className={styles.footerCopyrightGold}>Steve Hummer Homes</span>. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href="/contact" className={styles.footerBottomLink}>Privacy Policy</Link>
            <Link href="/contact" className={styles.footerBottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
