'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { MdSearch, MdHome, MdBed, MdBathtub, MdSquareFoot, MdClose, MdChevronLeft, MdChevronRight, MdPhone, MdEmail, MdWarning } from 'react-icons/md';
import PropertyCard, { Property, PropertyCardSkeleton } from '@/components/PropertyCard';
import styles from '@/styles/Listings.module.css';

const ITEMS_PER_PAGE = 9;

interface Filters {
  minprice: string;
  maxprice: string;
  minbeds: string;
  minbaths: string;
  type: string;
}

const defaultFilters: Filters = {
  minprice: '',
  maxprice: '',
  minbeds: '',
  minbaths: '',
  type: '',
};

function formatPrice(price: number): string {
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(2)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
}

export default function ListingsClient() {
  const [listings, setListings] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQ, setSearchQ] = useState('');
  const [appliedQ, setAppliedQ] = useState('');
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({
        limit: String(ITEMS_PER_PAGE),
        offset: String((page - 1) * ITEMS_PER_PAGE),
      });
      if (appliedFilters.minprice) params.set('minprice', appliedFilters.minprice);
      if (appliedFilters.maxprice) params.set('maxprice', appliedFilters.maxprice);
      if (appliedFilters.minbeds) params.set('minbeds', appliedFilters.minbeds);
      if (appliedFilters.minbaths) params.set('minbaths', appliedFilters.minbaths);
      if (appliedFilters.type) params.set('type', appliedFilters.type);
      if (appliedQ) params.set('q', appliedQ);

      const res = await fetch(`/api/listings?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? 'Failed to load listings');

      setListings(data.listings ?? []);
      setTotal(Number(data.total) || (data.listings?.length ?? 0));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setListings([]);
    } finally {
      setLoading(false);
    }
  }, [page, appliedFilters, appliedQ]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedQ(searchQ);
    setPage(1);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setSearchQ('');
    setAppliedQ('');
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));

  return (
    <>
      {/* =========================================================
          LISTINGS HERO
          ========================================================= */}
      <div className={styles.listingsHero} aria-label="Property search">
        <div className={styles.listingsHeroContent}>
          <div className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Listings</span>
          </div>
          <h1 className={styles.listingsHeroTitle}>Browse Property Listings</h1>
          <p className={styles.listingsHeroSub}>Search active MLS listings powered by IDX</p>

          <form onSubmit={handleSearch} className={styles.searchBar} id="listings-search-form">
            <input
              id="listings-search-input"
              type="text"
              placeholder="Search by city, address, zip code..."
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn} id="listings-search-btn">
              <MdSearch size={20} />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* =========================================================
          FILTER BAR
          ========================================================= */}
      <div className={styles.filterBar} role="search" aria-label="Filter listings">
        <div className="container">
          <div className={styles.filterInner}>
            <select
              id="filter-minprice"
              className={styles.filterSelect}
              value={filters.minprice}
              onChange={(e) => setFilters((f) => ({ ...f, minprice: e.target.value }))}
              aria-label="Minimum price"
            >
              <option value="">Min Price</option>
              <option value="100000">$100K+</option>
              <option value="200000">$200K+</option>
              <option value="300000">$300K+</option>
              <option value="500000">$500K+</option>
              <option value="750000">$750K+</option>
              <option value="1000000">$1M+</option>
            </select>

            <select
              id="filter-maxprice"
              className={styles.filterSelect}
              value={filters.maxprice}
              onChange={(e) => setFilters((f) => ({ ...f, maxprice: e.target.value }))}
              aria-label="Maximum price"
            >
              <option value="">Max Price</option>
              <option value="200000">Up to $200K</option>
              <option value="300000">Up to $300K</option>
              <option value="500000">Up to $500K</option>
              <option value="750000">Up to $750K</option>
              <option value="1000000">Up to $1M</option>
              <option value="2000000">Up to $2M</option>
            </select>

            <select
              id="filter-beds"
              className={styles.filterSelect}
              value={filters.minbeds}
              onChange={(e) => setFilters((f) => ({ ...f, minbeds: e.target.value }))}
              aria-label="Minimum bedrooms"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>

            <select
              id="filter-baths"
              className={styles.filterSelect}
              value={filters.minbaths}
              onChange={(e) => setFilters((f) => ({ ...f, minbaths: e.target.value }))}
              aria-label="Minimum bathrooms"
            >
              <option value="">Bathrooms</option>
              <option value="1">1+ Baths</option>
              <option value="2">2+ Baths</option>
              <option value="3">3+ Baths</option>
              <option value="4">4+ Baths</option>
            </select>

            <select
              id="filter-type"
              className={styles.filterSelect}
              value={filters.type}
              onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
              aria-label="Property type"
            >
              <option value="">Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Condominium">Condominium</option>
              <option value="Multifamily">Multi-Family</option>
              <option value="Land">Land</option>
              <option value="Commercial">Commercial</option>
            </select>

            <button className={styles.filterApplyBtn} onClick={handleApplyFilters} id="filter-apply-btn">
              <MdSearch size={15} /> Apply
            </button>
            <button className={styles.filterResetBtn} onClick={handleResetFilters} id="filter-reset-btn">
              Reset
            </button>

            {!loading && (
              <span className={styles.filterCount}>
                {total} {total === 1 ? 'listing' : 'listings'} found
              </span>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================
          LISTINGS GRID
          ========================================================= */}
      <div className={styles.listingsContent}>
        <div className="container">
          {error && (
            <div className={styles.errorBanner}>
              <MdWarning size={20} />
              {error}
            </div>
          )}

          <div className={styles.listingsGrid}>
            {loading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => <PropertyCardSkeleton key={i} />)
              : listings.length > 0
              ? listings.map((p) => (
                  <PropertyCard
                    key={p.mlsId}
                    property={p}
                    onClick={setSelectedProperty}
                  />
                ))
              : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyStateIcon}>
                    <MdHome size={64} />
                  </div>
                  <h3 className={styles.emptyStateTitle}>No listings found</h3>
                  <p className={styles.emptyStateDesc}>Try adjusting your filters or search terms.</p>
                  <button onClick={handleResetFilters} className="btn btn-navy" id="empty-reset-btn">
                    Clear All Filters
                  </button>
                </div>
              )
            }
          </div>

          {/* Pagination */}
          {!loading && listings.length > 0 && (
            <div className={styles.pagination} aria-label="Pagination">
              <button
                className={styles.pageNavBtn}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                id="pagination-prev"
              >
                <MdChevronLeft size={20} />
              </button>

              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNum = totalPages <= 5
                  ? i + 1
                  : page <= 3
                  ? i + 1
                  : page >= totalPages - 2
                  ? totalPages - 4 + i
                  : page - 2 + i;
                return (
                  <button
                    key={pageNum}
                    className={`${styles.pageBtn} ${page === pageNum ? styles.pageBtnActive : ''}`}
                    onClick={() => setPage(pageNum)}
                    aria-label={`Page ${pageNum}`}
                    aria-current={page === pageNum ? 'page' : undefined}
                    id={`pagination-page-${pageNum}`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                className={styles.pageNavBtn}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages || listings.length < ITEMS_PER_PAGE}
                aria-label="Next page"
                id="pagination-next"
              >
                <MdChevronRight size={20} />
              </button>
            </div>
          )}

          {/* IDX Attribution */}
          <p className={styles.idxAttribution}>
            Listings provided via SimplyRETS IDX integration. Data is for demonstration purposes.
            Contact Steve Hummer Homes to verify current availability.
          </p>
        </div>
      </div>

      {/* =========================================================
          PROPERTY DETAIL MODAL
          ========================================================= */}
      {selectedProperty && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setSelectedProperty(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Property details"
          id="property-detail-modal"
        >
          <div className={styles.modal}>
            <div className={styles.modalImageWrap}>
              {selectedProperty.photos?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedProperty.photos[0]}
                  alt={`Home at ${selectedProperty.address.full}`}
                  className={styles.modalImage}
                />
              ) : (
                <div className={styles.modalImagePlaceholder}>
                  <MdHome />
                </div>
              )}
              <button
                className={styles.modalCloseBtn}
                onClick={() => setSelectedProperty(null)}
                aria-label="Close modal"
                id="modal-close-btn"
              >
                <MdClose size={18} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalPrice}>{formatPrice(selectedProperty.listPrice)}</p>
              <p className={styles.modalAddress}>
                {selectedProperty.address.full}, {selectedProperty.address.city},{' '}
                {selectedProperty.address.state} {selectedProperty.address.postalCode}
              </p>

              <div className={styles.modalFeatures}>
                {selectedProperty.bedrooms != null && (
                  <span className={styles.modalFeature}>
                    <MdBed size={20} className={styles.modalFeatureIcon} />
                    {selectedProperty.bedrooms} Bedrooms
                  </span>
                )}
                {selectedProperty.bathsFull != null && (
                  <span className={styles.modalFeature}>
                    <MdBathtub size={20} className={styles.modalFeatureIcon} />
                    {selectedProperty.bathsFull} Bathrooms
                  </span>
                )}
                {selectedProperty.area > 0 && (
                  <span className={styles.modalFeature}>
                    <MdSquareFoot size={20} className={styles.modalFeatureIcon} />
                    {selectedProperty.area.toLocaleString()} sq ft
                  </span>
                )}
              </div>

              <div className={styles.modalCtas}>
                <Link href="/contact" className="btn btn-primary" onClick={() => setSelectedProperty(null)} id="modal-contact-cta">
                  <MdEmail size={16} /> Inquire About This Home
                </Link>
                <a href="tel:5414014456" className="btn btn-navy" id="modal-call-cta">
                  <MdPhone size={16} /> Call Steve
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
