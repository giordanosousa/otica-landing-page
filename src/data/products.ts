import type { Product } from "../types";
import { unsplashImage } from "../utils/images";

const CARD_WIDTHS = [400, 640, 900];

// TODO: trocar as fotos de exemplo por fotos reais dos modelos (src/assets)
export const products: Product[] = [
  {
    id: "oc-8021",
    code: "OC-8021",
    name: "Elegance Rose Gold",
    line: "Linha feminina",
    description: "Design leve em acetato nobre com hastes flexíveis de metal.",
    categories: ["feminino", "grau"],
    badge: { label: "Acetato premium", tone: "petrol" },
    image: unsplashImage("photo-1591076482161-42ce6da69f67", "Armação feminina em acetato", CARD_WIDTHS),
  },
  {
    id: "oc-9040",
    code: "OC-9040",
    name: "Titanium Executive Black",
    line: "Linha masculina",
    description: "Resistência extrema com acabamento fosco clássico e confortável.",
    categories: ["masculino", "grau"],
    badge: { label: "Ultraleve titânio", tone: "dark" },
    image: unsplashImage("photo-1508296695146-257a814070b4", "Armação masculina em titânio", CARD_WIDTHS),
  },
  {
    id: "oc-s700",
    code: "OC-S700",
    name: "Solar Aviator Gold Edition",
    line: "Coleção solar",
    description: "Lentes polarizadas com proteção total contra raios UVA/UVB.",
    categories: ["solar", "feminino", "masculino"],
    badge: { label: "Proteção UV400", tone: "gold" },
    image: unsplashImage("photo-1511499767150-a48a237f0083", "Óculos de sol modelo aviador", CARD_WIDTHS),
  },
  {
    id: "oc-kid10",
    code: "OC-KID10",
    name: "Carolina Kids Flex Silicone",
    line: "Linha infantil",
    description: "Desenvolvida para dar segurança e conforto à criança nas atividades diárias.",
    categories: ["infantil", "grau"],
    badge: { label: "Flexível e resistente", tone: "green" },
    image: unsplashImage("photo-1543163521-1bf539c55dd2", "Armação infantil flexível", CARD_WIDTHS),
  },
  {
    id: "oc-8090",
    code: "OC-8090",
    name: "Cat Eye Vintage Chic",
    line: "Linha feminina",
    description: "Formato gatinho que valoriza a expressão facial com elegância clássica.",
    categories: ["feminino", "grau"],
    badge: { label: "Tendência", tone: "petrol" },
    image: unsplashImage("photo-1574258495973-f010dfbb5371", "Armação feminina formato gatinho", CARD_WIDTHS),
  },
  {
    id: "oc-s920",
    code: "OC-S920",
    name: "Urban Sport Matte",
    line: "Linha solar",
    description: "Design moderno e anatômico, ideal para o dia a dia e atividades ao ar livre.",
    categories: ["masculino", "solar"],
    badge: { label: "Lentes antirrisco", tone: "petrol" },
    image: unsplashImage("photo-1511499767150-a48a237f0083", "Óculos de sol esportivo", CARD_WIDTHS),
  },
];
