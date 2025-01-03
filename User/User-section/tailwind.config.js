/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jaro: ['Jaro', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        AntonSC: ['Anton SC', 'sans-serif']
      }
    },
    colors: {
      primary: {
        DEFAULT: ' #128B9E',
        600: '#127c8c',
        700: '#136f7d'
      },
      lightGray: '#5F5F60',
    }
  },
  plugins: [],
}
