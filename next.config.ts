import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ouput: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    domains: ['controleur.ca', 'img.freepik.com', 'th.bing.com'], // Agrega el dominio de tu imagen
  },
};

export default nextConfig;
