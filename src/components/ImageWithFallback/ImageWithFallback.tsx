import { useState } from "react";
import fallbackSrc from "../../assets/placeholder-frame.svg";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  /** Dimensões intrínsecas: reservam o espaço e evitam salto de layout. */
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  /** Use apenas em imagens da primeira dobra (carrega com alta prioridade). */
  priority?: boolean;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  priority = false,
  className,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? fallbackSrc : src}
      srcSet={failed ? undefined : srcSet}
      sizes={failed ? undefined : sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
