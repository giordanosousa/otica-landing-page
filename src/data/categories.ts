import { Baby, Briefcase, Flower2, Glasses, Sun } from "lucide-react";
import type { Category } from "../types";

export const categories: Category[] = [
  { id: "feminino", label: "Feminino", description: "Armações delicadas e marcantes.", icon: Flower2 },
  { id: "masculino", label: "Masculino", description: "Do clássico ao moderno.", icon: Briefcase },
  { id: "solar", label: "Sol / Proteção UV", description: "Estilo com proteção para os olhos.", icon: Sun },
  { id: "grau", label: "Lentes de grau", description: "Para enxergar bem todos os dias.", icon: Glasses },
  { id: "infantil", label: "Infantil", description: "Conforto e segurança para os pequenos.", icon: Baby },
];
