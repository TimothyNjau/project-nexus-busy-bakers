import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "static01.nyt.com", pathname: "/**" },
      { protocol: "https", hostname: "cambreabakes.com", pathname: "/**" },
      { protocol: "https", hostname: "images.ctfassets.net", pathname: "/**" },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "gonnawantseconds.com", pathname: "/**" },
      { protocol: "https", hostname: "beyondfrosting.com", pathname: "/**" },
      { protocol: "https", hostname: "dessertfortwo.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "thebakingchocolatess.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "lilluna.com", pathname: "/**" },
      { protocol: "https", hostname: "sprinklesomesugar.com", pathname: "/**" },
      { protocol: "https", hostname: "allrecipes.com", pathname: "/**" },
      { protocol: "https", hostname: "glutenfreebaking.com", pathname: "/**" },
      { protocol: "https", hostname: "modernhoney.com", pathname: "/**" },
      { protocol: "https", hostname: "justsotasty.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "thehazelnutfactory.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "richanddelish.com", pathname: "/**" },
      { protocol: "https", hostname: "smalltownwoman.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "thebakingchocolatess.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
