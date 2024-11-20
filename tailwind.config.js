/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // Rutas para las páginas
    "./components/**/*.{js,ts,jsx,tsx}",  // Rutas para los componentes
    "./app/**/*.{js,ts,jsx,tsx}",        // Rutas para los archivos app (si usas esta carpeta)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
