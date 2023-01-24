import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@vkontakte\/vkui$/, replacement: "@vkontakte/vkui/dist/cssm" },
    ],
  },
  plugins: [react()],
});
