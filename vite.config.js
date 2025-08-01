// vite.config.js
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile";
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [viteSingleFile(), react(), tailwindcss()],
})
