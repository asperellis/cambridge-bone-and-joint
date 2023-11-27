/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#232E63',
        'brand-dark-purple': '#605EA8',
        'brand-light-blue': '#D7F1F4'
      },
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
