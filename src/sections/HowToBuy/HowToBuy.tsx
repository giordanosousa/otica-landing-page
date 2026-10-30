import { CalendarCheck } from "lucide-react";
import { Button, Container, SectionTitle } from "../../components";
import { steps } from "../../data/steps";
import { cn } from "../../utils/cn";

const numberTones = [
  "bg-gold text-petrol-dark",
  "bg-aqua-light text-petrol-dark",
  "bg-white text-petrol-dark",
];

interface HowToBuyProps {
  onBookingClick: () => void;
}

export function HowToBuy({ onBookingClick }: HowToBuyProps) {
  return (
    <section
      id="exames"
      aria-labelledby="exames-title"
      className="surface-dark bg-petrol py-16 text-white md:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-5">
          <SectionTitle
            id="exames-title"
            align="left"
            tone="dark"
            eyebrow="Agendamento fácil"
            title="Como funciona o agendamento do exame"
            description="Facilitamos o processo para você cuidar da visão sem complicação e com horários flexíveis."
          />
          <Button
            size="lg"
            fullWidthMobile
            onClick={onBookingClick}
            icon={<CalendarCheck className="size-5" />}
          >
            Agendar agora pelo WhatsApp
          </Button>
        </div>

        <ol role="list" className="space-y-4 lg:col-span-7">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:gap-6 sm:p-6"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-xl font-heading text-xl font-extrabold",
                  numberTones[index % numberTones.length],
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-200">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
