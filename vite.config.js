import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ساده و بدون دردسر
export default defineConfig({
  base: "/Contact-List/",
  plugins: [react()],
});
