'use client';

import { useState } from 'react';
import { MdBed, MdBathtub, MdSquareFoot, MdFavorite, MdFavoriteBorder, MdHome } from 'react-icons/md';
import styles from '@/styles/PropertyCard.module.css';

export interface Property {
  mlsId: string;
  listPrice: number;
  address: {
    full: string;
    city: string;
    state: string;
    postalCode: string;
  };
  bedrooms: number;
  bathsFull: number;
  area: number;
  property: {
    type: string;
  };
  photos?: string[];
  listingStatus: string;
}

interface PropertyCardProps {
  property: Property;
  onClick?: (property: Property) => void;
}

function formatPrice(price: number): string {
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(2)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
}

function getStatusClass(status: string) {
  const s = status?.toLowerCase();
  if (s === 'active') return styles.statusActive;
  if (s === 'pending') return styles.statusPending;
  return styles.statusClosed;
}

export function PropertyCardSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonBody}>
        <div className={`${styles.skeletonLine}`} style={{ width: '50%', height: '22px' }} />
        <div className={styles.skeletonLine} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
      </div>
    </div>
  );
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  const [favorited, setFavorited] = useState(false);
  const photo = property.photos?.[0];

  const handleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorited((f) => !f);
  };

  return (
    <div
      className={styles.card}
      onClick={() => onClick?.(property)}
      role="article"
      aria-label={`Property at ${property.address.full}`}
      id={`property-card-${property.mlsId}`}
    >
      <div className={styles.imageWrap}>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={`Home at ${property.address.full}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <MdHome />
          </div>
        )}
        <span className={`${styles.statusBadge} ${getStatusClass(property.listingStatus)}`}>
          {property.listingStatus || 'Active'}
        </span>
        <button
          className={`${styles.favBtn} ${favorited ? styles.favActive : ''}`}
          onClick={handleFav}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorited ? <MdFavorite size={16} /> : <MdFavoriteBorder size={16} />}
        </button>
      </div>

      <div className={styles.body}>
        <p className={styles.price}>{formatPrice(property.listPrice)}</p>
        <p className={styles.address}>{property.address.full}, {property.address.city}, {property.address.state}</p>

        <div className={styles.features}>
          {property.bedrooms != null && (
            <span className={styles.featureItem}>
              <MdBed size={16} className={styles.featureIcon} />
              {property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}
            </span>
          )}
          {property.bathsFull != null && (
            <span className={styles.featureItem}>
              <MdBathtub size={16} className={styles.featureIcon} />
              {property.bathsFull} Bath{property.bathsFull !== 1 ? 's' : ''}
            </span>
          )}
          {property.area != null && property.area > 0 && (
            <span className={styles.featureItem}>
              <MdSquareFoot size={16} className={styles.featureIcon} />
              {property.area.toLocaleString()} sqft
            </span>
          )}
        </div>

        {property.property?.type && (
          <p className={styles.propertyType}>{property.property.type}</p>
        )}
      </div>
    </div>
  );
}
