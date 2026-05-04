'use client';

import Link from 'next/link';
import { MdSearch, MdTrendingUp, MdHandshake, MdStar, MdArrowForward, MdVerified, MdSupportAgent, MdInsights, MdLocationOn } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import styles from '@/styles/Home.module.css';

const services = [
  {
    icon: MdSearch,
    title: 'Buy a Home',
    description: 'Let us guide you through every step of purchasing your dream home — from finding the right neighborhood to closing day.',
    link: 'https://www.cadwellrealtygroup.com/steve-hummer',
  },
  {
    icon: MdTrendingUp,
    title: 'Sell Your Home',
    description: 'Maximize your home\'s value with our proven marketing strategies, expert pricing, and dedicated negotiation on your behalf.',
    link: '/contact',
  },
  {
    icon: MdInsights,
    title: 'Investment Properties',
    description: 'Build lasting wealth through smart real estate investments. We help identify high-yield opportunities tailored to your goals.',
    link: 'https://www.cadwellrealtygroup.com/steve-hummer',
  },
];

const features = [
  {
    icon: MdVerified,
    title: 'Licensed & Certified',
    desc: 'Fully licensed real estate professional with verified credentials and ongoing education.',
  },
  {
    icon: MdHandshake,
    title: 'Integrity & Transparency',
    desc: 'Honest advice, clear communication, and your best interests at the heart of every transaction.',
  },
  {
    icon: MdSupportAgent,
    title: '24/7 Client Support',
    desc: 'Always available to answer your questions and guide you through the buying or selling process.',
  },
  {
    icon: FaAward,
    title: 'Award-Winning Service',
    desc: 'Consistently recognized for delivering exceptional results and outstanding client satisfaction.',
  },
];

const testimonials = [
  {
    text: 'Steve did an amazing job helping my fiancée and I every step of the way as first time home buyers! Answered all our questions, made us feel at ease when looking for homes within our budget. Only person I can think of to ever recommend for your realtor needs!',
    name: 'Septiembre Rendon',
    location: 'Bought a Single Family home in 2024 in Lebanon, OR',
    initials: 'SR',
    stars: 5,
  },
  {
    text: 'Steve did an absolutely amazing job working with me on the sale of my home and purchase of my new home. Both were not easy, but he made it happen! He helped me through every step of the process. Highly recommend contacting him as an agent. If I purchase another home in the future I will for sure be getting ahold of him again!',
    name: 'Rodney Hanson',
    location: 'Bought and sold a Single Family home in 2025 in Sweet Home, OR',
    initials: 'RH',
    stars: 5,
  },
  {
    text: 'Steve is a very responsive realtor and helped us buy our first home. Numerous times Steve had offered help beyond expectation to make the process come together. Even after buying, he has checked in to see if there\'s anything else that he could assist with.',
    name: 'Andrew Spencer',
    location: 'Bought a Single Family home in 2025 in Sweet Home, OR',
    initials: 'AS',
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section id="hero" className={styles.hero} aria-label="Hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroOverlay2} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Trusted Real Estate Professional
          </div>

          <h1 className={styles.heroTitle}>
            Your Trusted<br />
            <span className={styles.heroTitleGold}>Real Estate</span> Partner
          </h1>

          <p className={styles.heroSubtitle}>
            Helping you find or sell your home with confidence and ease. Steve Hummer Homes delivers personalized service, expert guidance, and proven results.
          </p>

          <div className={styles.heroCtas}>
            <a href="https://www.cadwellrealtygroup.com/steve-hummer" className="btn btn-primary" id="hero-cta-search" target="_blank" rel="noopener noreferrer">
              <MdSearch size={18} />
              Search Listings
            </a>
            <Link href="/contact" className="btn btn-outline" id="hero-cta-contact">
              Get Free Consultation
            </Link>
          </div>
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <span>Scroll</span>
          <span className={styles.heroScrollLine} />
        </div>
      </section>

      {/* =========================================================
          STATS BAR
          ========================================================= */}
      <section id="stats" className={styles.statsBar} aria-label="Key statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { number: '500+', label: 'Homes Sold' },
              { number: '5+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '$200M+', label: 'In Sales Volume' },
            ].map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
          ========================================================= */}
      <section id="services" className={`${styles.servicesSection} section-padding`} aria-label="Our services">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Comprehensive Real Estate Services</h2>
            <div className="gold-divider gold-divider-center" />
            <p className="section-subtitle">
              Whether you&apos;re buying, selling, or investing, we provide expert guidance every step of the way.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <div key={svc.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svc.icon size={28} />
                </div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDescription}>{svc.description}</p>
                <Link href={svc.link} className={styles.serviceLink}>
                  Learn More <MdArrowForward size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED LISTINGS
          ========================================================= */}
      <section id="featured-listings" className={`${styles.listingsSection} section-padding`} aria-label="Featured property listings">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">Browse Properties</span>
            <h2 className="section-title">Find Your Perfect Home</h2>
            <div className="gold-divider gold-divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
              Explore available listings and find the property that fits your lifestyle and budget.
            </p>
            <a
              href="https://www.cadwellrealtygroup.com/steve-hummer"
              className="btn btn-primary"
              id="featured-view-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdSearch size={18} /> Browse All Listings <MdArrowForward size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
          ========================================================= */}
      <section id="why-us" className={`${styles.whySection} section-padding`} aria-label="Why choose us">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className="section-eyebrow">Why Steve Hummer Homes</span>
              <h2 className={`section-title section-title-white`}>
                Experience the Difference of True Expertise
              </h2>
              <div className="gold-divider" />
              <p className={`section-subtitle section-subtitle-white`}>
                With over 5 years of dedicated service, we combine deep market knowledge with an unwavering commitment to client success.
              </p>

              <div className={styles.whyFeatures}>
                {features.map((f) => (
                  <div key={f.title} className={styles.whyFeatureItem}>
                    <div className={styles.whyFeatureIcon}>
                      <f.icon size={20} />
                    </div>
                    <div className={styles.whyFeatureText}>
                      <h4 className={styles.whyFeatureTitle}>{f.title}</h4>
                      <p className={styles.whyFeatureDesc}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about" className="btn btn-primary" id="why-learn-more">
                  Meet Steve <MdArrowForward size={16} />
                </Link>
              </div>
            </div>

            <div className={styles.whyImageBox}>
              <div className={styles.whyImageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/maphotography-17.webp"
                  alt="Steve Hummer"
                />
              </div>
              <div className={styles.whyBadge}>
                <div className={styles.whyBadgeNum}>5+</div>
                <div className={styles.whyBadgeLabel}>Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
          ========================================================= */}
      <section id="testimonials" className={`${styles.testimonialsSection} section-padding`} aria-label="Client testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">Client Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="gold-divider gold-divider-center" />
            <p className="section-subtitle">
              Real experiences from real clients — their success is our greatest achievement.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {'★'.repeat(t.stars)}
                </div>
                <div className={styles.testimonialQuote}>&ldquo;</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.initials}</div>
                  <div>
                    <p className={styles.testimonialName}>{t.name}</p>
                    <p className={styles.testimonialLocation}>
                      <MdLocationOn size={12} style={{ verticalAlign: 'middle' }} /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA BANNER
          ========================================================= */}
      <section id="cta-banner" className={styles.ctaBanner} aria-label="Call to action">
        <div className="container">
          <h2 className={styles.ctaBannerTitle}>Ready to Find Your Dream Home?</h2>
          <p className={styles.ctaBannerSubtitle}>
            Let&apos;s start your real estate journey today. Contact Steve for a free, no-obligation consultation.
          </p>
          <div className={styles.ctaBannerActions}>
            <a href="https://www.cadwellrealtygroup.com/steve-hummer" className={`btn ${styles.ctaBtnDark}`} id="cta-browse" target="_blank" rel="noopener noreferrer">
              <MdSearch size={18} /> Browse Listings
            </a>
            <Link href="/contact" className={`btn ${styles.ctaBtnLight}`} id="cta-contact">
              <MdStar size={18} /> Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
