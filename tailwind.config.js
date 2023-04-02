/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#01B489",
        primaryLight: "#1BE59D",
        textSecondary: "#444F55",
        accent: "rgba(68, 79, 85, 1)",
        accentLight: "#444F55",
        bgAccent: "#F1F1F1",
        muted: "#7D7C7C",
      },
      fontFamily: {
        // primary: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      // xs: '360px',
      sm: "480px",
      md: "768px",
      // ipad: '830px',
      lg: "1200px",
      // minixl: '1200px',
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
