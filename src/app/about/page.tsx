import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MdVerified, MdHandshake, MdStar, MdArrowForward, MdPerson,
  MdTrendingUp, MdHome
} from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import styles from '@/styles/About.module.css';

export const metadata: Metadata = {
  title: 'About Steve Hummer',
  description: 'Meet Steve Hummer — a licensed real estate professional with over 5 years of experience helping clients buy, sell, and invest in properties with confidence and integrity.',
};

const values = [
  {
    icon: MdHandshake,
    title: 'Integrity',
    description: 'Every transaction is built on honesty and transparency. We always act in your best interest, no exceptions.',
  },
  {
    icon: MdStar,
    title: 'Excellence',
    description: 'We hold ourselves to the highest professional standards, delivering results that consistently exceed expectations.',
  },
  {
    icon: MdTrendingUp,
    title: 'Results',
    description: 'Our track record speaks for itself — hundreds of successful closings and satisfied clients across the region.',
  },
];

const credentials = [
  'Licensed Real Estate Agent',
  'Accredited Buyer\'s Representative',
  'Certified Negotiation Expert',
  'National Association of Realtors Member',
  'Cadwell Realty Group',
];

const journeyMilestones = [
  { year: '2008', label: 'Started Real Estate Career' },
  { year: '2013', label: '100 Homes Sold Milestone' },
  { year: '2019', label: 'Award-Winning Agent' },
  { year: '2024', label: '500+ Homes Sold' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="page-hero-title" style={{ marginTop: '0.75rem' }}>About Steve Hummer</h1>
          <p className="page-hero-subtitle">
            A dedicated real estate professional committed to your success from the first handshake to the final signature.
          </p>
        </div>
      </div>

      {/* =========================================================
          BIO SECTION
          ========================================================= */}
      <section id="about-bio" className={`${styles.bioSection} section-padding`} aria-label="About Steve">
        <div className="container">
          <div className={styles.bioGrid}>

            {/* Image column */}
            <div className={styles.bioImageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/maphotography-14 (6).webp" alt="Steve Hummer" className={styles.bioImage} />
              <div className={styles.bioBadgeWrap}>
                <div className={styles.bioBadge}>
                  <div className={styles.bioBadgeIcon}><FaAward size={20} /></div>
                  <div className={styles.bioBadgeText}>
                    <span className={styles.bioBadgeNum}>500+</span>
                    <span className={styles.bioBadgeLabel}>Homes Sold</span>
                  </div>
                </div>
                <div className={styles.bioBadge}>
                  <div className={styles.bioBadgeIcon}><MdStar size={20} /></div>
                  <div className={styles.bioBadgeText}>
                    <span className={styles.bioBadgeNum}>5+</span>
                    <span className={styles.bioBadgeLabel}>Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className={styles.bioContent}>
              <span className="section-eyebrow">Meet Your Agent</span>
              <h2 className={styles.bioName}>Steve Hummer</h2>
              <p className={styles.bioTitle}>Licensed Real Estate Professional · Cadwell Realty Group</p>
              <div className="gold-divider" />

              <p className={styles.bioParagraph}>
                With over 5 years of experience in the real estate industry, Steve Hummer has built a reputation for delivering exceptional results with an unwavering commitment to his clients. His deep knowledge of the local market, combined with a personalized approach, has helped hundreds of families find their dream homes and sellers achieve top dollar for their properties.
              </p>
              <p className={styles.bioParagraph}>
                Steve believes that buying or selling a home is one of the most significant decisions in a person&apos;s life. That&apos;s why he treats every client relationship with the care, honesty, and dedication it deserves — from the first consultation to long after closing day.
              </p>
              <p className={styles.bioParagraph}>
                Whether you&apos;re a first-time buyer navigating the process for the first time, a seasoned homeowner ready to sell, or an investor looking to grow your portfolio, Steve has the expertise and network to guide you to success.
              </p>

              <div className={styles.bioCredentials}>
                {credentials.map((c) => (
                  <span key={c} className={styles.bioCredentialTag}>
                    <MdVerified size={13} style={{ color: 'var(--color-gold-dark)' }} />
                    {c}
                  </span>
                ))}
              </div>

              <div className={styles.bioCtaRow}>
                <Link href="/contact" className="btn btn-primary" id="about-contact-cta">
                  Work With Steve <MdArrowForward size={16} />
                </Link>
                <Link href="/listings" className="btn btn-navy" id="about-listings-cta">
                  <MdHome size={16} /> Browse Listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
          ========================================================= */}
      <section id="about-values" className={`${styles.valuesSection} section-padding`} aria-label="Our values">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">Our Foundation</span>
            <h2 className="section-title">Built on Core Values</h2>
            <div className="gold-divider gold-divider-center" />
            <p className="section-subtitle">
              These principles guide every interaction, every negotiation, and every result we deliver.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <v.icon size={30} />
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDescription}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY TIMELINE
          ========================================================= */}
      <section id="about-journey" className={`${styles.journeySection} section-padding`} aria-label="Career journey">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">Career Milestones</span>
            <h2 className={`section-title section-title-white`}>A Proven Track Record</h2>
            <div className="gold-divider gold-divider-center" />
          </div>

          <div className={styles.journeyGrid}>
            {journeyMilestones.map((m) => (
              <div key={m.year} className={styles.journeyItem}>
                <div className={styles.journeyDot} />
                <div className={styles.journeyYear}>{m.year}</div>
                <div className={styles.journeyLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT CTA
          ========================================================= */}
      <section id="about-cta" className={styles.aboutCta} aria-label="Contact call to action">
        <div className="container text-center">
          <span className="section-eyebrow">Ready to Begin?</span>
          <h2 className={`section-title section-title-white`} style={{ marginBottom: '1rem' }}>
            Let&apos;s Make Your Real Estate Goals a Reality
          </h2>
          <p className={`section-subtitle section-subtitle-white`} style={{ margin: '0 auto 2rem' }}>
            Contact Steve today for a free, no-obligation consultation.
          </p>
          <Link href="/contact" className="btn btn-primary" id="about-final-cta">
            Get In Touch <MdArrowForward size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
