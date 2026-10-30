import { MessageCircle } from "lucide-react";
import { business } from "../../config/business";
import { buildWhatsappUrl } from "../../utils/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsappUrl(business.whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl transition-colors hover:bg-emerald-800 motion-reduce:transition-none sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
      <span className="sr-only">Falar com a gente pelo WhatsApp (abre em nova aba)</span>
      <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 flex size-4">
        <span className="absolute inline-flex size-full rounded-full bg-gold opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex size-4 rounded-full bg-gold" />
      </span>
    </a>
  );
}
