// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "ComValue",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Психолог в Пятигорске" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/css/style.css", "@/assets/css/normalize.css"],
  modules: [
    'vue3-carousel-nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //additionalData: '@use "@/assets/scss/variables/variables.scss" as *;',
        },
      },
    },
  },
});
