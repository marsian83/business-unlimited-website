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
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#061d6d",
        secondary: "#999750",
        background: "#e6e6d5",
        foreground: "#191a0f",
        front: "#191a0f",
        back: "#ffffff",
        mute: "#68778d",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
