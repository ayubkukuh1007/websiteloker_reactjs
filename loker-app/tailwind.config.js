module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue-dark': '#304259',
        'custom-gold-dark': '#d3b161',
        'custom-gray-dark': '#293a4e',
        'custom-text-001': '#788596'
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
