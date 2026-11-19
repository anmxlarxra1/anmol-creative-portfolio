/**
 * Normalizes image paths so users can write:
 * - "my-poster.jpg"
 * - "images/my-poster.png"
 * - "/images/my-poster.webp"
 * - "https://example.com/poster.jpg"
 * All local paths are resolved to point cleanly to the public folder,
 * properly respecting Vite's base path for GitHub Pages deployment.
 */
export function normalizeImagePath(path) {
  if (!path || typeof path !== 'string') return '';
  const trimmed = path.trim();

  // If already an external URL or data URI
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed;
  }

  // Determine base path from Vite env (e.g. '/anmol-creative-portfolio/' in prod or '/' in dev)
  let base = '/';
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) {
    base = import.meta.env.BASE_URL;
  }
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  let subPath = trimmed;
  // If starts with "/", strip it to safely prefix cleanBase
  if (subPath.startsWith('/')) {
    subPath = subPath.slice(1);
  }

  // If starts with "anmol-creative-portfolio/", strip it so cleanBase doesn't duplicate
  if (subPath.startsWith('anmol-creative-portfolio/')) {
    subPath = subPath.replace(/^anmol-creative-portfolio\//, '');
  }

  // If starts with "images/..."
  if (subPath.startsWith('images/')) {
    return `${cleanBase}${subPath}`;
  }

  // If just a filename like "my-poster.jpg"
  if (!subPath.includes('/')) {
    return `${cleanBase}images/${subPath}`;
  }

  return `${cleanBase}${subPath}`;
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
