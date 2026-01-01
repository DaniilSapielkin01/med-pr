import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export" as const, // ← добавь "as const" — это решает проблему с типом
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "",
};

export default withVanillaExtract(nextConfig);
