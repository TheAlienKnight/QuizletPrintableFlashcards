import { fileURLToPath, URL } from "node:url";
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VitePWA({ registerType: 'prompt', mode: "production", manifest: { name: "Flashcard Printer + Study Tool", short_name: "Flashcard Toolkit", description: "Print flashcards on 3x5 or 4x6, make study sets, or import them from other sites!", display: 'fullscreen'} })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
