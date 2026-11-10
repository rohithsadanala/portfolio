import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export so the site can be previewed/served without a server
     (`npm run build` writes a self-contained site to `out/`). */
  output: "export",
  /* Image Optimization requires a server, which a static export has no
     access to — serve the (already small) images as-is instead. */
  images: { unoptimized: true },
  /* NOTE: `cacheComponents` / `partialPrefetching` (PPR) cannot be enabled
     in export mode — static export is a plain static site, no PPR. */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
