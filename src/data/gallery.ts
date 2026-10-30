import type { GalleryItem } from "../types";
import { unsplashImage } from "../utils/images";

const GALLERY_WIDTHS = [480, 720, 960];

// TODO: trocar pelas fotos reais da loja
export const gallery: GalleryItem[] = [
  {
    id: "showroom",
    title: "Showroom amadeirado",
    caption: "Exposição organizada para experimentar com calma.",
    image: unsplashImage("photo-1556740758-90de374c12ad", "Showroom da Ótica Carolina", GALLERY_WIDTHS),
  },
  {
    id: "atendimento",
    title: "Mesa de atendimento personalizado",
    caption: "Conforto e atenção exclusiva a cada cliente.",
    image: unsplashImage("photo-1582719478250-c89cae4dc85b", "Mesa de atendimento da loja", GALLERY_WIDTHS),
  },
  {
    id: "medicao",
    title: "Medição digital de lentes",
    caption: "Precisão no alinhamento das pupilas.",
    image: unsplashImage("photo-1576091160399-112ba8d25d1d", "Equipamentos de medição ótica", GALLERY_WIDTHS),
  },
];
