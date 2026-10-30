import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "../../config/business";
import { formatSlot } from "../../utils/schedule";
import { buildWhatsappUrl } from "../../utils/whatsapp";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LogoMark } from "../LogoMark/LogoMark";

interface FooterProps {
  onBookingClick: () => void;
}

const socialClasses =
  "inline-flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-petrol-dark";
const linkClasses = "inline-flex min-h-11 items-center hover:text-gold";
const headingClasses = "mb-3 text-sm font-bold text-white";

export function Footer({ onBookingClick }: FooterProps) {
  return (
    <footer className="surface-dark border-t border-white/10 bg-petrol-dark pb-24 pt-14 text-slate-300 sm:pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-aqua/30 bg-petrol">
                <LogoMark className="size-8" />
              </span>
              <p className="font-heading text-lg font-extrabold tracking-wider text-white">
                {business.name.toUpperCase()}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Sua referência em saúde visual, lentes de alta precisão e moda eyewear em {business.cityLabel}.
            </p>
            <div className="flex gap-3">
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
              >
                <InstagramIcon className="size-5" />
                <span className="sr-only">Instagram {business.instagram.handle} (abre em nova aba)</span>
              </a>
              <a
                href={buildWhatsappUrl(business.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                <span className="sr-only">WhatsApp (abre em nova aba)</span>
              </a>
            </div>
          </div>

          <nav aria-label="Atalhos do rodapé">
            <h2 className={headingClasses}>Navegação</h2>
            <ul className="text-sm" role="list">
              {business.footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClasses}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className={headingClasses}>Unidade {business.city}</h2>
            <ul className="text-sm" role="list">
              <li className="flex min-h-11 items-center gap-2">
                <MapPin className="size-4 shrink-0 text-aqua-light" aria-hidden="true" />
                {business.cityLabel}
              </li>
              <li>
                <a href={business.phoneHref} className={`${linkClasses} gap-2`}>
                  <Phone className="size-4 shrink-0 text-aqua-light" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className={`${linkClasses} gap-2 break-all`}>
                  <Mail className="size-4 shrink-0 text-aqua-light" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
            </ul>
          </address>

          <div>
            <h2 className={headingClasses}>Atendimento</h2>
            <ul className="space-y-1 text-sm text-slate-300" role="list">
              {business.schedule.map((slot) => (
                <li key={slot.label}>{formatSlot(slot)}</li>
              ))}
            </ul>
            <Button variant="gold" size="sm" className="mt-4 w-full" onClick={onBookingClick}>
              Agendar horário
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name} — Unidade {business.cityLabel}. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
