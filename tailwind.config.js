/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
      },
      colors: {
        dark: "#0c0808",
        green: "#1E3329",
        pink: "#fed2d1",
        yellow: "#FFc94b",
        "light-grey": "#ECECEC",
        "dark-grey": "#B8B8B8",
        light: "#FAFAFA",
      },
      zIndex: {
        "-1": -1,
      },
      screens: {
        smallBP: "320px",
        semiBP: "456px",
      },
    },
  },
  plugins: [],
};
