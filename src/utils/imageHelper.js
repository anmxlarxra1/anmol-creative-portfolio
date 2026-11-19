/**
 * Normalizes image paths so users can write:
 * - "my-poster.jpg"
 * - "images/my-poster.png"
 * - "/images/my-poster.webp"
 * - "https://example.com/poster.jpg"
 * All local paths are resolved to point cleanly to the public folder.
 */
export function normalizeImagePath(path) {
  if (!path || typeof path !== 'string') return '';
  const trimmed = path.trim();

  // If already an external URL or data URI
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed;
  }

  // If just a filename like "my-poster.jpg" or "ai-hackathon.png"
  if (!trimmed.includes('/')) {
    return `/images/${trimmed}`;
  }

  // If starts with "images/..."
  if (trimmed.startsWith('images/')) {
    return `/${trimmed}`;
  }

  // If starts with "/" but not "/images/" (e.g. "/my-poster.png")
  if (trimmed.startsWith('/') && !trimmed.startsWith('/images/')) {
    return `/images${trimmed}`;
  }

  // Already "/images/..."
  return trimmed;
}

/**
 * Checks if a path has a valid supported image extension.
 * Supports JPG, JPEG, PNG, WEBP, SVG, AVIF, GIF.
 */
export function isSupportedImageFormat(path) {
  if (!path || typeof path !== 'string') return false;
  const lower = path.toLowerCase().split('?')[0];
  return /\.(jpg|jpeg|png|webp|svg|gif|avif)$/.test(lower);
}
