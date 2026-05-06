'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdHome } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from '@/styles/Header.module.css';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/listings', label: 'Listings' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      id="site-header"
      className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTransparent}`}
    >
      <div className={`container ${styles.headerInner}`}>
        {/* Logo */}
        <Link href="/" className={styles.headerLogo} aria-label="Steve Hummer Homes — Home">
          <div className={styles.headerLogoIcon} style={{ background: 'transparent' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/2.webp" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className={styles.headerLogoText}>
            <span className={styles.headerLogoName}>Steve Hummer Homes</span>
            <span className={styles.headerLogoTagline}>Licensed Real Estate</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.headerNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${(link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                ? styles.navLinkActive
                : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="tel:5414014456" className={styles.headerCta} id="header-cta-call">
          <FaPhoneAlt size={13} />
          (541) 401-4456
        </Link>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className={`${styles.menuToggle} ${mobileOpen ? styles.menuToggleOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
          <span className={styles.menuToggleBar} />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileNavLink} ${(link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
              ? styles.mobileNavLinkActive
              : ''
              }`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="tel:5414014456" className={styles.mobileNavCta}>
          <FaPhoneAlt size={13} style={{ marginRight: '6px' }} />
          Call (541) 401-4456
        </Link>
      </nav>
    </header>
  );
}
