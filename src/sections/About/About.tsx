import { Container, ImageWithFallback, SectionTitle } from "../../components";
import { business } from "../../config/business";
import { gallery } from "../../data/gallery";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-wood py-16 md:py-24">
      <Container>
        <SectionTitle
          id="sobre-title"
          eyebrow="Conheça nosso espaço"
          title={`Nossa loja em ${business.cityLabel}`}
          description="Projetada nos mínimos detalhes para oferecer conforto, privacidade e elegância durante as suas escolhas."
        />

        <ul role="list" className="mt-12 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <li key={item.id}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md md:aspect-[4/5]">
                <ImageWithFallback
                  {...item.image}
                  width={720}
                  height={900}
                  sizes="(min-width: 768px) 30vw, 92vw"
                  className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-6 bottom-6">
                  <p className="text-lg font-bold text-white">{item.title}</p>
                  <p className="text-sm text-slate-100">{item.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
