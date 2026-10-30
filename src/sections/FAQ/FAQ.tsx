import { ChevronDown } from "lucide-react";
import { Container, SectionTitle } from "../../components";
import { faq } from "../../data/faq";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle
          id="faq-title"
          eyebrow="Dúvidas frequentes"
          title="Perguntas que costumamos receber"
        />

        {/* <details> nativo: acessível por teclado e leitor de tela, sem JavaScript */}
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.map((item) => (
            <details key={item.id} className="group rounded-2xl border border-slate-200 bg-white open:shadow-md">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-heading text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-petrol transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
