import React from 'react';

export const FALLBACK_DESTINATION_IMAGE = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80';
export const FALLBACK_EVENT_IMAGE = 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80';
export const FALLBACK_MARKETPLACE_IMAGE = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80';

export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  fallbackUrl: string = FALLBACK_DESTINATION_IMAGE
) {
  const target = e.currentTarget;
  if (target.src !== fallbackUrl) {
    target.onerror = null;
    target.src = fallbackUrl;
  }
}
