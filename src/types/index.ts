import type { LucideIcon } from "lucide-react";

export type CategoryId = "feminino" | "masculino" | "solar" | "grau" | "infantil";
export type CategoryFilter = CategoryId | "all";

export interface ImageAsset {
  src: string;
  srcSet?: string;
  alt: string;
}

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: LucideIcon;
}

export type BadgeTone = "petrol" | "dark" | "gold" | "green";

export interface Product {
  id: string;
  code: string;
  name: string;
  line: string;
  description: string;
  categories: CategoryId[];
  badge: { label: string; tone: BadgeTone };
  image: ImageAsset;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: ImageAsset;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
