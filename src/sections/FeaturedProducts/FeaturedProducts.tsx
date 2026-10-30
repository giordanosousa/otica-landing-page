import { MessageCircle } from "lucide-react";
import { Button, Container, ProductCard, SectionTitle } from "../../components";
import { business } from "../../config/business";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import type { CategoryFilter } from "../../types";
import { cn } from "../../utils/cn";
import { buildWhatsappUrl } from "../../utils/whatsapp";

const filters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Todos os estilos" },
  ...categories.map((category) => ({ id: category.id, label: category.label })),
];

interface FeaturedProductsProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

export function FeaturedProducts({ activeCategory, onCategoryChange }: FeaturedProductsProps) {
  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.categories.includes(activeCategory));

  return (
    <section id="armacoes" aria-labelledby="armacoes-title" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle
          id="armacoes-title"
          eyebrow="Catálogo de armações"
          title="Encontre o modelo perfeito para o seu estilo"
          description="Todos os modelos acompanham garantia de fábrica e ajuste personalizado na loja."
        />

        <div role="group" aria-label="Filtrar armações por categoria" className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((filter) => {
            const active = filter.id === activeCategory;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => onCategoryChange(filter.id)}
                className={cn(
                  "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors motion-reduce:transition-none",
                  active
                    ? "border-petrol bg-petrol text-white"
                    : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p role="status" className="sr-only">
          {visibleProducts.length} {visibleProducts.length === 1 ? "modelo exibido" : "modelos exibidos"}
        </p>

        <ul role="list" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="surface-dark mt-12 flex flex-col gap-6 rounded-3xl bg-petrol p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-sm font-bold text-gold">Não encontrou o que procurava?</p>
            {/* TODO: confirmar o número de armações em estoque */}
            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
              Temos mais de 1.000 armações em estoque no showroom
            </h3>
            <p className="mt-2 text-sm text-slate-200">
              Visite nossa loja no centro de {business.city} ou peça as fotos do catálogo completo pelo
              WhatsApp.
            </p>
          </div>
          <Button
            href={buildWhatsappUrl("Olá! Gostaria de ver o catálogo completo de armações.")}
            external
            fullWidthMobile
            icon={<MessageCircle className="size-4" />}
            className="shrink-0"
          >
            Falar com consultor
          </Button>
        </div>
      </Container>
    </section>
  );
}
