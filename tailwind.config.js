/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorCafe1: ' #B87333',
        colorCafe2: ' #D4AB85',
        // Jaime
        base: '#b87333',
        letras: '#ee9f05',
        cerrar: '#efcead',
        div: '#eeeeee'
      },
    },
  },
  
  plugins: [],
}

