/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/assets/images/**/*.{jpg,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dolar-image":
          "url('../app/assets/images/dollar_background_stock_photo_Slide01.jpg')",
        "dolar-image-opacity": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
