"use client";

import { useState, useEffect } from "react";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const CITY_CONFIG: Record<string, { center: string; zoom: number }> = {
  uzhhorod: { center: "48.6208,22.2879", zoom: 13 },
  mukachevo: { center: "48.4493,22.7233", zoom: 13 },
  default: { center: "48.62,22.29", zoom: 10 },
};

export const GoogleMap = () => {
  const [userCity, setUserCity] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => d.city && setUserCity(d.city.toLowerCase()))
      .catch(() => setUserCity(null));
  }, []);

  const getConfig = () => {
    if (userCity?.includes("uzhhorod") || userCity?.includes("ужгород")) {
      return CITY_CONFIG.uzhhorod;
    }
    if (userCity?.includes("mukachevo") || userCity?.includes("мукачево")) {
      return CITY_CONFIG.mukachevo;
    }
    return CITY_CONFIG.default;
  };

  const config = getConfig();

  const src = `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_API_KEY}&q=Prevention&center=${config.center}&zoom=${config.zoom}&language=uk&region=ua`;

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
