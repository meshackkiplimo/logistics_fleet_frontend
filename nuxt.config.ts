import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  modules: ['@nuxt/image'],

  image: {
    domains: ['images.unsplash.com'],
    format: ['webp', 'jpg'],
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});