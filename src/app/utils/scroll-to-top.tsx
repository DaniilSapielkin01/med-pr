"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Полностью сбрасываем скролл при смене маршрута
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Дополнительно для случаев с overflow на body/html
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
