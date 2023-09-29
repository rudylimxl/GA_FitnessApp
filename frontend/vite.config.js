import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-konva"], // Add 'react-konva' to the list of external modules
    },
  },
};
