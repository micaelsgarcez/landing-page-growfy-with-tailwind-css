const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D96F4',
        black: '#0D0D11'
      },
      fontFamily: {
        sans: ['var(--font)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
