/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Extend the default color palette with custom purple shades
        primary: {
          light: "#D6BBFB",
          DEFAULT: "#7B61FF",
          dark: "#4E3F94",
        },
        secondary: {
          light: "#E0C3FC",
          DEFAULT: "#8E44AD",
          dark: "#5B2C6F",
        },
        background: {
          light: "#F3F4F6",
          dark: "#1A202C",
        },
        text: {
          light: "#2D3748",
          dark: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};
