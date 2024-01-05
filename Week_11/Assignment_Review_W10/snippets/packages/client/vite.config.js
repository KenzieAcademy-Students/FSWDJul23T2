import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
    proxy: {
      "/avatars": {
        target: "http://localhost:3001/",
      },
    },
  },
});
