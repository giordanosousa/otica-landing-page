import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button, Container, SectionTitle } from "../../components";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { business } from "../../config/business";
import { formatSlot } from "../../utils/schedule";

const iconBox = "mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-petrol/10 text-petrol";

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="bg-white py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-5">
          <SectionTitle
            id="localizacao-title"
            align="left"
            eyebrow="Venha nos visitar"
            title={`Sua ótica no centro de ${business.city}`}
            description="Fácil acesso, ambiente climatizado e estacionamento próximo."
          />

          <address className="space-y-6 not-italic">
            <div className="flex items-start gap-4">
              <span className={iconBox}>
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">Endereço</h3>
                <p className="text-sm text-slate-700">{business.address.line}</p>
                <p className="mt-0.5 text-sm text-slate-600">{business.address.reference}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className={iconBox}>
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">Horário de funcionamento</h3>
                {business.schedule.map((slot) => (
                  <p key={slot.label} className="text-sm text-slate-700">
                    {formatSlot(slot)}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className={iconBox}>
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">Contato e agendamentos</h3>
                <p className="text-sm text-slate-700">
                  <a href={business.phoneHref} className="inline-flex min-h-11 items-center font-medium text-petrol underline">
                    {business.phoneDisplay}
                  </a>
                </p>
                <p className="text-sm text-slate-700">
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-medium text-petrol underline"
                  >
                    <InstagramIcon className="size-4" />
                    {business.instagram.handle}
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </p>
              </div>
            </div>
          </address>
        </div>

        <div className="lg:col-span-7">
          <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 p-6 text-center shadow-xl lg:min-h-96">
            <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-petrol text-gold shadow-lg motion-safe:animate-bounce">
              <MapPin className="size-8" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              {business.name} — Unidade {business.city}
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-700">
              Abra a rota no Google Maps para chegar até a loja pelo celular ou pelo computador.
            </p>
            <Button
              href={business.address.mapsUrl}
              external
              variant="petrol"
              size="lg"
              className="mt-6"
              icon={<Navigation className="size-4 text-gold" />}
            >
              Abrir rota no Google Maps
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
