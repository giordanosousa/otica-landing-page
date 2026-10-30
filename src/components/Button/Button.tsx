import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "gold" | "glass" | "petrol" | "soft";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  /** Ocupa a largura toda no mobile e volta ao tamanho natural a partir de sm. */
  fullWidthMobile?: boolean;
  className?: string;
  /** Com href renderiza <a>; sem href renderiza <button>. */
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  gold: "bg-gold text-petrol-dark shadow-gold-glow hover:bg-gold-hover font-heading font-bold",
  glass: "border border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold",
  petrol: "bg-petrol text-white hover:bg-petrol-dark font-bold",
  soft: "bg-wood text-petrol-dark hover:bg-gold font-bold",
};

// min-h-11 = 44px: área de toque mínima confortável
const sizes: Record<Size, string> = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-14 px-8 text-base",
};

export function Button({
  children,
  variant = "gold",
  size = "md",
  icon,
  trailingIcon,
  fullWidthMobile = false,
  className,
  href,
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl text-center transition-colors duration-200 motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    fullWidthMobile && "w-full sm:w-auto",
    className,
  );

  const content = (
    <>
      {icon && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {trailingIcon && (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {trailingIcon}
        </span>
      )}
      {external && <span className="sr-only">(abre em nova aba)</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
