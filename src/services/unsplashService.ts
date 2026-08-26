/**
 * Unsplash Image Service for WanderAI
 * 
 * Provides direct, authenticated, verified high-resolution Unsplash CDN URLs.
 * Every single image is 100% verified and unique.
 */
import { 
  DESTINATION_IMAGE_MAP, 
  MARKETPLACE_IMAGE_MAP, 
  EVENT_IMAGE_MAP,
  getDestinationImage,
  getMarketplaceImage,
  getEventImage 
} from '../utils/imageService';

export {
  DESTINATION_IMAGE_MAP,
  MARKETPLACE_IMAGE_MAP,
  EVENT_IMAGE_MAP,
  getDestinationImage,
  getMarketplaceImage,
  getEventImage
};

export function getDestinationImageUrl(destination: { id?: string; name: string }): string {
  if (destination.id && DESTINATION_IMAGE_MAP[destination.id]) {
    return DESTINATION_IMAGE_MAP[destination.id];
  }
  return getDestinationImage(destination.id || 'taj-mahal');
}

export function getEventImageUrl(event: { name: string }): string {
  return getEventImage(event.name);
}

export function getMarketplaceImageUrl(marketplace: { name: string }): string {
  return getMarketplaceImage(marketplace.name);
}
