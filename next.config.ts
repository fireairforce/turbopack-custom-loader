import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "./src"),
    },
    moduleIds: 'named',
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    rules: {
      '*.txt': {
        loaders: ['./test-file-loader.js'],
        as: '*.js',
      },
    }
  },
  experimental: {
    turbopackMinify: false,
  }

};

export default nextConfig;
