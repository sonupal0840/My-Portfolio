import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-Protfolio/", // 👈 यहाँ अपना GitHub Repo Name सही से डालें
  build: {
    outDir: "dist", // यह Default है, लेकिन Confirm करने के लिए रखा गया है
  },
});
