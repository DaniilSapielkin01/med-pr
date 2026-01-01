import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true, // Рекомендую включить для надёжности маршрутов
  basePath: "/med-pr", // ← Главное изменение!
  images: {
    unoptimized: true, // Обязательно для static export
  },
};

export default withVanillaExtract(nextConfig);
