import type { ImageAsset } from "../types";

const UNSPLASH_BASE = "https://images.unsplash.com";

const unsplashUrl = (photoId: string, width: number) =>
  `${UNSPLASH_BASE}/${photoId}?auto=format&fit=crop&w=${width}&q=75`;

/**
 * Monta src + srcSet responsivos (formato moderno via auto=format).
 * Ao trocar por fotos próprias em src/assets, basta devolver { src, alt } no lugar.
 */
export function unsplashImage(photoId: string, alt: string, widths: number[]): ImageAsset {
  return {
    src: unsplashUrl(photoId, widths[0]),
    srcSet: widths.map((w) => `${unsplashUrl(photoId, w)} ${w}w`).join(", "),
    alt,
  };
}
