import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export",  ← прибрали, щоб працювали API routes
  trailingSlash: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // ← прибрали, на Vercel не потрібно
  images: {
    unoptimized: true,
  },
};

export default withVanillaExtract(nextConfig);
