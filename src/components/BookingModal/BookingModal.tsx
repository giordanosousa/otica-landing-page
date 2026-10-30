import { useEffect, useRef, type FormEvent } from "react";
import { Calendar, MessageCircle, X } from "lucide-react";
import { business } from "../../config/business";
import { buildWhatsappUrl } from "../../utils/whatsapp";
import { Button } from "../Button/Button";

const services = [
  "Agendamento de exame de vista",
  "Armações e preços",
  "Orçamento de lentes digitais",
  "Outros assuntos",
];

const periods = ["Manhã", "Tarde", "Qualquer horário"];

const fieldClasses =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-500";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Usa o <dialog> nativo: foco preso no modal, Esc fecha e o foco volta
 * para o botão que abriu, sem biblioteca extra.
 */
export function BookingModal({ open, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const period = String(data.get("period") ?? "");

    const message = `Olá! Meu nome é ${name}. Gostaria de atendimento na ${business.name} (${business.cityLabel}).\n\n- Assunto: ${service}\n- Preferência de horário: ${period}`;

    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    form.reset();
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="booking-title"
      onClose={onClose}
      onClick={(event) => {
        // clique no backdrop: o alvo é o próprio <dialog>
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl bg-white p-0 text-slate-700 shadow-2xl backdrop:bg-black/60"
    >
      <div className="relative p-6 sm:p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-petrol/10 text-petrol">
            <Calendar className="size-6" aria-hidden="true" />
          </div>
          <h2 id="booking-title" className="text-xl font-bold text-slate-900">
            Agendar atendimento em {business.city}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Preencha os dados para começarmos seu atendimento pelo WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="booking-name" className="mb-1 block text-sm font-semibold text-slate-800">
              Seu nome
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Ex.: Maria Santos"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="booking-service" className="mb-1 block text-sm font-semibold text-slate-800">
              Assunto do atendimento
            </label>
            <select id="booking-service" name="service" className={fieldClasses}>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="booking-period" className="mb-1 block text-sm font-semibold text-slate-800">
              Período de preferência
            </label>
            <select id="booking-period" name="period" className={fieldClasses}>
              {periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full"
            icon={<MessageCircle className="size-5" />}
          >
            Iniciar conversa no WhatsApp
          </Button>
        </form>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="size-6" aria-hidden="true" />
          <span className="sr-only">Fechar</span>
        </button>
      </div>
    </dialog>
  );
}
