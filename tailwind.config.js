/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif']
      },
      textColor: {
        'brand-dark-blue': '#232E63'
      }
    }
  },
  plugins: []
}
