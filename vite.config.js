import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import envCompatible from "vite-plugin-env-compatible";



// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [react(), envCompatible()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
