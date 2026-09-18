import type { NextConfig } from "next";
import { defaultLocale } from "./src/data/profile";

const nextConfig: NextConfig = {
  // The site lives at /en and /es. Bare / hands the visitor the default language.
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
