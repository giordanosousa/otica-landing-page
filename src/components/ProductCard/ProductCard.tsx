import { ChevronRight } from "lucide-react";
import { business } from "../../config/business";
import type { BadgeTone, Product } from "../../types";
import { cn } from "../../utils/cn";
import { buildWhatsappUrl } from "../../utils/whatsapp";
import { Button } from "../Button/Button";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";

const badgeTones: Record<BadgeTone, string> = {
  petrol: "bg-petrol text-white",
  dark: "bg-slate-800 text-white",
  gold: "bg-gold text-petrol-dark",
  green: "bg-emerald-800 text-white",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const message = `Olá! Gostaria de mais informações sobre o modelo ${product.name} (${product.code}) na unidade de ${business.city}.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <ImageWithFallback
          {...product.image}
          width={640}
          height={480}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
          className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold",
            badgeTones[product.badge.tone],
          )}
        >
          {product.badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-semibold text-petrol-light">{product.line}</p>
            <p className="text-xs text-slate-600">Cód. {product.code}</p>
          </div>
          <h3 className="mt-1 text-lg font-bold text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-600">Condição de loja</p>
            <p className="text-sm font-bold text-petrol">{business.paymentCondition}</p>
          </div>
          <Button
            href={buildWhatsappUrl(message)}
            external
            variant="soft"
            size="sm"
            trailingIcon={<ChevronRight className="size-4" />}
          >
            Consultar<span className="sr-only"> {product.name} no WhatsApp</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
