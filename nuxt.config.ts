// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      api_base_url: 'https://jsonplaceholder.typicode.com'
      // api_base_url: 'https://backend.ctva.org.sa/api'
    }
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: 'nuxt3-primevue-tailwind-starter',
      htmlAttrs: {
        lang: 'ar'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'fixxel' },
        { name: 'google', content: 'notranslate' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    baseURL: '/',
  },

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  pinia: {
    autoImports: ['defineStore']
  },
  primevue: {
    options: {
      // unstyled: true,
      zIndex: {
        modal: 3000
      },
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '' // for disable dark mode
        }
      }
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['"Fira Code"', 'monospace'],
          },
        },
      },
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-SA',
        file: 'ar.json',
        name: 'العربية',
        dir: 'rtl',
      },
    ],
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'ar',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },
  css: [
    "~/assets/scss/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/partials/_variables.scss" as *;
            @use "~/assets/scss/partials/_mixins.scss" as *;
          `,
        },
      },
    },
  },

})