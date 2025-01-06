import { defineConfig } from "vite";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
import legacy from "@vitejs/plugin-legacy";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/', // Definindo a base para o projeto, normalmente raiz do domínio
  root: './src', // Definindo o diretório de entrada principal do código-fonte
  publicDir: 'public', // Definindo a pasta onde o Vite vai procurar arquivos estáticos (a pasta 'public' na raiz)
  plugins: [
    createHtmlPlugin({
      inject: {
        data: { title: "Portfólio Moderno" },
      },
    }),
    legacy({ targets: ["defaults", "not IE 11"] }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Poritfólio",
        short_name: "Portifólio",
        description: "Portifólio com projetos pessoais",
        theme_color: "#ffffff",
        lang: "br",
        icons: [
          { src: "/assets/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/assets/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
    ...(process.env.NODE_ENV === "production" ? [viteImagemin(), compression()] : []),
  ],
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/index.html"),
        english: path.resolve(__dirname, "./src/english.html"),
        spanish: path.resolve(__dirname, "./src/spanish.html"),
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|ico|webp|avif)$/.test(name || "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.(css)$/.test(name || "")) {
            return "assets/styles/[name]-[hash][extname]";
          }
          if (/\.(ttf|otf|woff|woff2)$/.test(name || "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          if (/\.(pdf)$/.test(name || "")) {
            return "assets/pdf/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "scripts/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@script": path.resolve(__dirname, "./src/js"),
      "@styles": path.resolve(__dirname, "./src/css"),
      "@images": path.resolve(__dirname, "./src/img"),
      "@icons": path.resolve(__dirname, "./src/icons"),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
