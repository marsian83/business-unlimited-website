/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./**.html",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      mobile: { max: "780px" },
      widescreen: { min: "780px" },
    },
    extend: {
      colors: {
        primary: "#228922",
        secondary: "#03cf64",
        background: "#ffffff",
        foreground: "#202327",
        front: "#000000",
        back: "#ffffff",
        mute: "#68778d",
      },
      fontFamily: {
        rubik: "'Rubik', 'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
