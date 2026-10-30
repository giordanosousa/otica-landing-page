import { cn } from "../../utils/cn";

interface SectionTitleProps {
  /** id do <h2>, usado pelo aria-labelledby da <section>. */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionTitleProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("text-sm font-bold", dark ? "text-aqua-light" : "text-petrol-light")}>{eyebrow}</p>
      <h2
        id={id}
        className={cn(
          "mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl",
          dark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3 text-base leading-relaxed", dark ? "text-slate-200" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
