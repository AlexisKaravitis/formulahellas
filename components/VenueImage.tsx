'use client';

import { useState } from 'react';

interface VenueImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders an <img> that quietly removes itself if the file is missing or fails
 * to load. Used for venue imagery so a not-yet-added photo never shows a broken
 * image. Plain <img> is intentional: these can be external (hot-linked) URLs.
 */
export default function VenueImage({ src, alt, className }: VenueImageProps) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}
