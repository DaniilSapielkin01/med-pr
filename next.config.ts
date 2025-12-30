import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract({
  reactStrictMode: true,
});

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
