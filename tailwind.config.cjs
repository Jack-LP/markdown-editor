/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          100: '#35383f',
          200: '#2c2d31',
          300: '#1e1f23',
          400: '#15161a',
        },
        slate: '#c3c4c9',
        myOrange: '#e46643',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'sans-serif'],
        commissioner: ['Commissioner', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
