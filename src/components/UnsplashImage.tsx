/**
 * UnsplashImage Component for WanderAI
 *
 * Intelligently loads the most relevant image from Unsplash for a given search
 * query. Falls back to a provided staticSrc if:
 *   - No Unsplash API key is configured
 *   - API call fails
 *   - Result is not yet cached
 *
 * Results are cached 24h in localStorage so each unique query only costs 1 API call.
 */
import { useState, useEffect } from 'react';
import { fetchUnsplashImage } from '../services/unsplashService';

interface UnsplashImageProps {
  query: string;
  staticSrc: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export function UnsplashImage({ query, staticSrc, alt, className, onError }: UnsplashImageProps) {
  const [src, setSrc] = useState<string>(staticSrc);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchUnsplashImage(query).then((entry) => {
      if (!cancelled && entry?.url) {
        setSrc(entry.url);
      }
    });

    return () => { cancelled = true; };
  }, [query]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        // Fall back to static on error
        if (src !== staticSrc) setSrc(staticSrc);
        onError?.(e);
      }}
      style={{ opacity: loaded ? 1 : 0.85, transition: 'opacity 0.4s ease' }}
    />
  );
}
