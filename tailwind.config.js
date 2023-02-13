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
    extend: {
      colors: {
        primary: "#ff0222",
        secondary: "#9104ff",
        background: "#ffffff",
        foreground: "#202327",
        front: "#000000",
        back: "#ffffff",
        mute: "#68778d",
      },
      fontFamily: {
        rubik: "'Rubik', 'Open Sans', sans-serif"
      }
    },
  },
  plugins: [],
};
