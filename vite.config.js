import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/With-Stylo/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "with-stylo" as *;`
      }
    }
  }
});
