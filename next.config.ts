import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "./src"),
    },
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    rules: {
      '*.txt': {
        loaders: ['./test-file-loader.js'],
        as: '*.js',
      },
    }
  }
};

export default nextConfig;
