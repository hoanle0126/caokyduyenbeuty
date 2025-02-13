import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    base: "/",
    resolve: {
        alias: {
            resources: path.resolve(__dirname, "./resources"),
            icons: path.resolve(__dirname, "./resources/assets/icons"),
        },
    },
});
