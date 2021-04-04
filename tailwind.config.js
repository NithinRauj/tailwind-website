module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#100E1D',
      },
      screens: {
        medium: { 'max': '865px' },
        mobile: { 'max': '375px' }
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
