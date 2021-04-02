module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#100E1D',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'active', 'focus'],
      borderColor: ['active'],
      outline: ['focus'],
      transform: ['hover', 'group-hover'],
      transitionProperty: ['hover', 'group-hover'],
      translate: ['group-hover']
    },
  },
  plugins: [],
}
