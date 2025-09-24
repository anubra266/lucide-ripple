import { defineConfig } from "vite";
import { ripple } from "vite-plugin-ripple";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), ripple()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
