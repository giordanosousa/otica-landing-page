import { useEffect, useState } from "react";
import { isOpenNow } from "../utils/schedule";

export function useOpenStatus(): boolean {
  const [isOpen, setIsOpen] = useState(() => isOpenNow());

  useEffect(() => {
    const id = window.setInterval(() => setIsOpen(isOpenNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return isOpen;
}
