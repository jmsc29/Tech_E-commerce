import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],  // Agrega "localhost" para permitir imágenes desde tu backend
  }
};

export default nextConfig;
