export interface NavLink {
  label: string;
  href: string;
}

export interface ScheduleSlot {
  label: string;
  /** 0 = domingo … 6 = sábado */
  days: number[];
  open: string;
  close: string;
}

export interface HeroStat {
  value: string;
  label: string;
  tone: "gold" | "aqua" | "white";
}

const whatsappNumber = "5598988880000";

export const business = {
  name: "Ótica Carolina",
  nameTop: "ÓTICA",
  nameBottom: "CAROLINA",
  city: "Chapadinha",
  state: "MA",
  cityLabel: "Chapadinha - MA",
  timeZone: "America/Fortaleza",

  phoneDisplay: "(98) 98888-0000",
  phoneHref: `tel:+${whatsappNumber}`,
  whatsappNumber,
  email: "contato@oticacarolina.com.br",

  instagram: {
    handle: "@oticacarolina_",
    url: "https://instagram.com/oticacarolina_",
  },

  address: {
    line: "Centro Comercial, Chapadinha - MA", // TODO: endereço completo
    reference: "Ponto de referência fácil no centro da cidade.",
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Ótica Carolina Chapadinha MA",
    )}`,
  },

  schedule: [
    { label: "Segunda a Sexta", days: [1, 2, 3, 4, 5], open: "08:00", close: "18:00" },
    { label: "Sábado", days: [6], open: "08:00", close: "12:00" },
  ] as ScheduleSlot[],

  paymentCondition: "10x sem juros",

  whatsappMessages: {
    general: "Olá! Gostaria de atendimento na Ótica Carolina.",
  },

  navLinks: [
    { label: "Armações", href: "#armacoes" },
    { label: "Exame de vista", href: "#exames" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ] as NavLink[],

  footerLinks: [
    { label: "Armações femininas", href: "#armacoes" },
    { label: "Armações masculinas", href: "#armacoes" },
    { label: "Óculos de sol", href: "#armacoes" },
    { label: "Exame de vista", href: "#exames" },
    { label: "Lentes digitais", href: "#diferenciais" },
  ] as NavLink[],

  // TODO: números de exemplo — substituir por dados reais da loja
  heroStats: [
    { value: "100%", label: "Garantia digital", tone: "gold" },
    { value: "+5.000", label: "Clientes atendidos", tone: "aqua" },
    { value: "4.9 ★", label: "Avaliação em Chapadinha", tone: "white" },
  ] as HeroStat[],

  // TODO: trocar por uma avaliação real autorizada
  heroReview: {
    title: "Atendimento 5 estrelas",
    quote: "Melhor ótica de Chapadinha, armações maravilhosas!",
  },
};
