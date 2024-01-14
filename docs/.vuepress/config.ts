import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Pullstar",
      description: "Documentation for Pullstar Retail Solution",
    },
  },

  theme,

  shouldPrefetch: false,
});
