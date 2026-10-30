import { Container, SectionTitle } from "../../components";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import type { CategoryId } from "../../types";

interface CategoriesProps {
  onSelect: (id: CategoryId) => void;
}

export function Categories({ onSelect }: CategoriesProps) {
  return (
    <section id="categorias" aria-labelledby="categorias-title" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          id="categorias-title"
          eyebrow="Escolha por categoria"
          title="Qual é o seu estilo?"
          description="Toque em uma categoria para ver os modelos disponíveis."
        />

        <ul role="list" className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = products.filter((product) => product.categories.includes(category.id)).length;

            return (
              <li key={category.id}>
                <a
                  href="#armacoes"
                  onClick={() => onSelect(category.id)}
                  className="flex h-full flex-col items-start rounded-2xl border border-slate-200 bg-wood/60 p-5 hover:border-gold"
                >
                  <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-petrol text-gold">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-base font-bold text-slate-900">{category.label}</span>
                  <span className="mt-1 text-sm text-slate-600">{category.description}</span>
                  <span className="mt-3 text-sm font-semibold text-petrol">
                    {count} {count === 1 ? "modelo" : "modelos"}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
