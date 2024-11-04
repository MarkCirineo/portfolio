import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@components": resolve(__dirname, "./src/components"),
            "@stores": resolve(__dirname, "./src/stores"),
        },
    },
});
