/**
 * UnsplashImage — Zero-config automatic image component for WanderAI
 *
 * Uses Unsplash Source URLs (no API key required).
 * Pass any destination/event/marketplace object's auto-generated URL as `src`.
 * Falls back to `fallbackSrc` (stored Unsplash URL from mockData/DB) on error.
 */
import { useState } from 'react';

interface UnsplashImageProps {
  /** URL from getDestinationImageUrl() / getEventImageUrl() / getMarketplaceImageUrl() */
  src: string;
  /** Stored static fallback (from mockData images[] or event.image_url) */
  fallbackSrc?: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export function UnsplashImage({ src, fallbackSrc, alt, className, onError }: UnsplashImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [errored, setErrored] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!errored && fallbackSrc && imgSrc !== fallbackSrc) {
      setErrored(true);
      setImgSrc(fallbackSrc);
    }
    onError?.(e);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
