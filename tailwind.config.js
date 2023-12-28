/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#B88E2F",
        secondaryColor: "#F6D8C6",
      },
    },
  },
  plugins: [],
};