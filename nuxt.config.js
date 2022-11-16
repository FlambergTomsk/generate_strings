export default {
  ssr: false,
  target: "server",
  // loading: '~/components/loading.vue',
  loading: {
    color: "#FF6800",
    height: "4px",
    continuous: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "generate_strings",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "@assets/sass/main.sass",
      lang: "sass",
    },
  ],

  styleResources: {
    sass: ["~/assets/sass/mixin.sass", "~/assets/sass/vars.sass"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/style-resources",
  ],

  router: {
    linkActiveClass: "sidebar__link_active",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      });
    },
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-class-properties",
          {
            loose: true,
          },
        ],
        [
          "@babel/plugin-proposal-private-methods",
          {
            loose: true,
          },
        ],
        [
          "@babel/plugin-proposal-private-property-in-object",
          {
            loose: true,
          },
        ],
      ],
    },
  },
};
