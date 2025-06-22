import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

export default defineConfig({

    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
        plugins: [tailwindcss()],

    },
});
