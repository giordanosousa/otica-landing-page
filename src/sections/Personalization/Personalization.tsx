import { Container, SectionTitle } from "../../components";
import { differentials } from "../../data/differentials";
import { cn } from "../../utils/cn";

const iconTones = ["text-gold", "text-aqua-light"];

export function Personalization() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          id="diferenciais-title"
          eyebrow="A experiência Ótica Carolina"
          title="Por que somos a preferida em Chapadinha?"
          description="Unimos a sofisticação de uma boutique ao rigor técnico da saúde visual."
        />

        <ul role="list" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="rounded-2xl border border-slate-200 bg-wood/60 p-6 sm:p-8">
                <span
                  className={cn(
                    "mb-5 flex size-14 items-center justify-center rounded-2xl bg-petrol",
                    iconTones[index % iconTones.length],
                  )}
                >
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
