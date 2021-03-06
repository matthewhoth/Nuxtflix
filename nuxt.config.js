const pkg = require("./package");

const imageBase =
  process.env.DEPLOY_ENV === "NETLIFY"
    ? {
        env: {
          baseUrl: "images"
        }
      }
    : {
        env: {
          baseUrl: "images"
        }
      };

module.exports = {
  mode: "universal",

  ...imageBase,

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/styles.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "./plugins/vue-notification", ssr: false },
    { src: "~/plugins/global-mixins" },
    { src: "./plugins/v-tooltip" },
    { src: "./plugins/nuxt-client-init" }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],

  manifest: {
    name: "Nuxtflix",
    theme_color: "#808080"
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
