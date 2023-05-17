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
      colors: {
        activo: "#ff0000", // Puedes ajustar el color aquí
      },

      borderWidth: {
        2: "2px", // Ancho del borde personalizado
      },
      boxShadow: {
        activo: "0px 1px 0px 0px #ff0000", // Sombra para simular la línea
      },
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
