import { useRef } from "react";
import { Calendar, Menu, MessageCircle, Phone, X } from "lucide-react";
import { business } from "../../config/business";
import { useDisclosure } from "../../hooks/useDisclosure";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useOpenStatus } from "../../hooks/useOpenStatus";
import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LogoMark } from "../LogoMark/LogoMark";

interface HeaderProps {
  onBookingClick: () => void;
}

const topLinkClasses = "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 hover:text-gold";

function AnnouncementBar() {
  const isOpen = useOpenStatus();

  return (
    <div className="surface-dark border-b border-petrol-light/40 bg-petrol-dark text-xs text-slate-200 md:text-sm">
      <Container className="flex items-center justify-between">
        <p className="flex items-center gap-2" role="status">
          <span
            aria-hidden="true"
            className={cn(
              "inline-block size-2 rounded-full",
              isOpen ? "bg-emerald-400 motion-safe:animate-ping" : "bg-slate-400",
            )}
          />
          <span className={cn("font-medium", isOpen ? "text-emerald-300" : "text-slate-300")}>
            {isOpen ? "Aberto agora" : "Fechado no momento"}
          </span>
          <span className="hidden text-slate-400 sm:inline">| {business.cityLabel}</span>
        </p>

        <div className="flex items-center">
          <a href={business.phoneHref} className={topLinkClasses}>
            <Phone className="size-4 text-aqua-light" aria-hidden="true" />
            <span className="sr-only md:not-sr-only">{business.phoneDisplay}</span>
          </a>
          <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className={topLinkClasses}>
            <InstagramIcon className="size-4 text-aqua-light" />
            <span className="sr-only sm:not-sr-only">{business.instagram.handle}</span>
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </Container>
    </div>
  );
}

export function Header({ onBookingClick }: HeaderProps) {
  const menu = useDisclosure();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEscapeKey(menu.isOpen, () => {
    menu.close();
    toggleRef.current?.focus();
  });

  return (
    <>
      <AnnouncementBar />

      <header className="surface-dark glass-nav sticky top-0 z-40 border-b border-white/10">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <a href="#" className="group flex items-center gap-3 rounded-lg">
            <span className="flex size-11 items-center justify-center rounded-xl border border-aqua/30 bg-petrol-dark/80 p-1 group-hover:border-gold sm:size-12">
              <LogoMark />
            </span>
            <span className="flex flex-col">
              <span className="font-heading text-lg font-extrabold leading-tight tracking-wider text-white sm:text-xl">
                {business.nameTop}
              </span>
              <span className="font-heading text-sm font-bold leading-none tracking-widest text-aqua-light">
                {business.nameBottom}
              </span>
            </span>
            <span className="sr-only">— ir para o início</span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8" role="list">
              {business.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-slate-100 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button
                size="sm"
                onClick={onBookingClick}
                icon={<Calendar className="size-4" />}
                className="rounded-full"
              >
                Agendar atendimento
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={menu.toggle}
              aria-expanded={menu.isOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-lg text-slate-100 hover:bg-white/10 lg:hidden"
            >
              {menu.isOpen ? (
                <X className="size-7" aria-hidden="true" />
              ) : (
                <Menu className="size-7" aria-hidden="true" />
              )}
              <span className="sr-only">{menu.isOpen ? "Fechar menu" : "Abrir menu"}</span>
            </button>
          </div>
        </Container>

        <div id="mobile-menu" hidden={!menu.isOpen} className="border-t border-white/10 bg-petrol-dark lg:hidden">
          <Container className="py-4">
            <nav aria-label="Principal (mobile)">
              <ul className="flex flex-col" role="list">
                {business.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={menu.close}
                      className="flex min-h-12 items-center text-lg font-medium text-slate-100 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 border-t border-white/10 pt-4">
              <Button
                size="lg"
                className="w-full"
                icon={<MessageCircle className="size-5" />}
                onClick={() => {
                  menu.close();
                  onBookingClick();
                }}
              >
                Agendar pelo WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
