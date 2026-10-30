import { useState } from "react";
import { BookingModal, Footer, Header, WhatsAppButton } from "./components";
import { useDisclosure } from "./hooks/useDisclosure";
import {
  About,
  Categories,
  FAQ,
  FeaturedProducts,
  Hero,
  HowToBuy,
  Location,
  Personalization,
} from "./sections";
import type { CategoryFilter } from "./types";

export default function App() {
  const booking = useDisclosure();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-petrol-dark"
      >
        Ir para o conteúdo
      </a>

      <Header onBookingClick={booking.open} />

      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero onBookingClick={booking.open} />
        <Categories onSelect={setActiveCategory} />
        <FeaturedProducts activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <Personalization />
        <HowToBuy onBookingClick={booking.open} />
        <About />
        <Location />
        <FAQ />
      </main>

      <Footer onBookingClick={booking.open} />
      <WhatsAppButton />
      <BookingModal open={booking.isOpen} onClose={booking.close} />
    </>
  );
}
