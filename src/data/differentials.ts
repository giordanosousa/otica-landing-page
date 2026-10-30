import { Coffee, Scan, ShieldCheck, Sparkles } from "lucide-react";
import type { Differential } from "../types";

export const differentials: Differential[] = [
  {
    id: "visagismo",
    title: "Visagismo eyewear",
    description:
      "Nossa equipe é treinada para indicar armações que harmonizam com o formato do seu rosto e com o seu estilo de vida.",
    icon: Sparkles,
  },
  {
    id: "lentes",
    title: "Lentes digitais HD",
    description:
      "Trabalhamos com marcas globais como Essilor, Zeiss e Hoyalux para um campo de visão mais amplo e confortável.",
    icon: Scan,
  },
  {
    id: "ambiente",
    title: "Ambiente boutique",
    description:
      "Um espaço planejado com elegância amadeirada, café especial e atendimento calmo, sem pressa.",
    icon: Coffee,
  },
  {
    id: "garantia",
    title: "Garantia e suporte local",
    description:
      "Assistência técnica em Chapadinha, ajustes gratuitos e garantia de adaptação das lentes.",
    icon: ShieldCheck,
  },
];
