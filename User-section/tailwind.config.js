/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import { darkMode } from './src/assets';
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
      sky: colors.sky,
      stone: colors.stone,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      ...colors,
      primary: {
        DEFAULT: ' #EFEAE7',
        600: '#EFEAE7',
        700: '#EFEAE7'
      },
      lightGray: '#5F5F60',
    }
  },
  plugins: [],
  darkMode: "class"
}
