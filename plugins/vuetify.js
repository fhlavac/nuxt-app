// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme = {
  dark: false,
  colors: {
    primary: "#006F3F",
    secondary: "#4d4d4d",
    success: "#25c760",
    warning: "#ffc82e",
    error: "#ff4c29",
    "grey-dark-2": "#2D2D37",
    "grey-dark-3": "#25252D",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      defaultTheme: "theme",
      themes: {
        theme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
