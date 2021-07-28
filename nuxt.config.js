import path from 'path'
import fs from 'fs'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: 'linkup.sn', // default: localhost,
    timing: false,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'app.linkup.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'app.linkup.crt'))
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LinkUp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.css',
    '~/assets/fonts/Akaya.css',
    '~/assets/fonts/Noto_sans.css',
    '~/assets/fonts/Pacifico.css',
    '~/assets/fonts/Ubuntu.css',
    '~/assets/fonts/Manrope.css',
    '~/assets/fonts/Abril_Fatface.css',
    '~/assets/fonts/Play.css',
    '~/assets/fonts/Elsie.css',
    '~/assets/fonts/Merienda.css',
    '~/assets/fonts/Nova_Slim.css',
    '~/assets/fonts/Sans_pro.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  router: {
    middleware: ['authenticated']
  },
  env: {
    URL_ASSETS    : "https://gbckelxngttdredvrsfh.supabase.co/storage/v1/object/public",
    URL_LINK : "https://linkup.my.id/"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-supabase', {
      supabaseUrl: 'https://gbckelxngttdredvrsfh.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjA5NzY1OSwiZXhwIjoxOTQxNjczNjU5fQ.dE2zVRFY1fCWYPuIcjdJE7hRpnQyySxgyu4iLD9PujI'
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
