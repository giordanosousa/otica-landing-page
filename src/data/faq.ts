import { business } from "../config/business";
import type { FaqItem } from "../types";

// TODO: revisar as respostas com a equipe da loja antes de publicar
export const faq: FaqItem[] = [
  {
    id: "agendamento",
    question: "Preciso agendar para fazer o exame de vista?",
    answer:
      "Recomendamos agendar pelo WhatsApp para garantir o melhor horário e evitar espera. Se preferir, você também pode visitar a loja e consultar a disponibilidade do dia.",
  },
  {
    id: "receita",
    question: "Posso usar a receita do meu oftalmologista?",
    answer:
      "Em geral, sim. Traga a receita e nossa equipe indica as melhores opções de lentes e armações. Se ela estiver antiga ou você tiver dúvidas, podemos agendar um novo exame.",
  },
  {
    id: "pagamento",
    question: "Quais são as formas de pagamento?",
    answer: `Os modelos em destaque podem ser parcelados em ${business.paymentCondition}. Para outras condições, fale com a nossa equipe pelo WhatsApp.`,
  },
  {
    id: "prazo",
    question: "Qual é o prazo de entrega dos óculos?",
    answer:
      "O prazo depende do tipo de lente e do grau. Informamos a previsão no atendimento, depois da medição e da escolha da armação.",
  },
  {
    id: "garantia",
    question: "Vocês fazem ajustes e dão garantia?",
    answer:
      "Sim. Oferecemos ajustes, suporte local em Chapadinha e garantia de adaptação das lentes. Os detalhes são explicados na hora da compra.",
  },
  {
    id: "infantil",
    question: "Vocês atendem crianças?",
    answer:
      "Temos uma linha infantil com armações flexíveis e confortáveis. Fale com a equipe para saber como funciona o atendimento para crianças.",
  },
];
