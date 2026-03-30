/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#112240',
          900: '#0A1526',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F58220',
          600: '#EA580C',
          800: '#9A3412',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}