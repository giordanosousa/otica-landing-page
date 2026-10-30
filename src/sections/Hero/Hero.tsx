import { ArrowDown, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Button, Container, ImageWithFallback } from "../../components";
import { business, type HeroStat } from "../../config/business";
import { unsplashImage } from "../../utils/images";

// TODO: trocar pela foto real da loja ou de um modelo da coleção
const heroImage = unsplashImage(
  "photo-1572635196237-14b3f281503f",
  "Óculos de sol premium da Ótica Carolina",
  [480, 800, 1100],
);

const statTones: Record<HeroStat["tone"], string> = {
  gold: "text-gold",
  aqua: "text-aqua-light",
  white: "text-white",
};

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="surface-dark relative overflow-hidden bg-petrol py-12 text-white md:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-aqua/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 size-96 rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-aqua/30 bg-white/10 px-4 py-2 text-xs font-semibold text-aqua-light sm:text-sm">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              <span>Unidade {business.cityLabel}</span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400" />
              <span className="font-normal text-slate-200">Sua ótica boutique</span>
            </p>

            <h1 id="hero-title" className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Sua visão com o <span className="gold-gradient-text">estilo e a precisão</span> que você merece.
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:mx-0">
              Atendimento humanizado, exames com precisão digital e uma curadoria exclusiva de armações
              internacionais e nacionais no coração de {business.city}.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                fullWidthMobile
                onClick={onBookingClick}
                icon={<MessageCircle className="size-5" />}
              >
                Agendar atendimento
              </Button>
              <Button
                href="#armacoes"
                variant="glass"
                size="lg"
                fullWidthMobile
                trailingIcon={<ArrowDown className="size-4" />}
              >
                Ver catálogo
              </Button>
            </div>

            <dl className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center lg:text-left">
              {business.heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-xs text-slate-200">{stat.label}</dt>
                  <dd className={`font-heading text-xl font-bold sm:text-2xl ${statTones[stat.tone]}`}>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white/20 bg-petrol-dark shadow-2xl">
                <ImageWithFallback
                  {...heroImage}
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 90vw"
                  priority
                  className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-petrol-dark/90 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-6 bottom-6">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-petrol-dark">
                    Coleção Boutique 2026
                  </span>
                  <p className="mt-2 text-lg font-bold text-white">Tecnologia em lentes multifocais</p>
                  <p className="text-sm text-slate-200">Adaptação rápida e máxima nitidez visual.</p>
                </figcaption>
              </figure>

              <div className="glass-card absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl border-l-4 border-l-gold p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-lg font-bold text-petrol"
                  >
                    ★
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{business.heroReview.title}</p>
                    <p className="text-xs text-slate-700">“{business.heroReview.quote}”</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-aqua/30 bg-petrol-dark p-4 text-center shadow-xl sm:block">
                <ShieldCheck className="mx-auto mb-1 size-6 text-aqua-light" aria-hidden="true" />
                <p className="text-xs font-bold">Laboratório próprio</p>
                <p className="text-xs text-slate-300">Entrega ágil</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
