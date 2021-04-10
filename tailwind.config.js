module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '600px'},
      // => @media (max-width: 600px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
