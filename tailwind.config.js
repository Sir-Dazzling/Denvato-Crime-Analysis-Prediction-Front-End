const plugin = require('tailwindcss/plugin');
module.exports = {
  important: true,
  purge: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        white: '#fffaff',
        primary: {
          light: '#7B55FF',
          mid: '#7B55FF',
          dark: '#7B55FF'
        },
        secondary: {
          light: '#66C5D6',
          mid: '#66C5D6',
          dark: '#66C5D6'
        },
        tertiary: {
          light: '#2B2B36',
          mid: '#2B2B36',
          dark: '#2B2B36'
        }
      }
    },
    variants: {
      opacity: ['responsive', 'hover', 'disabled'],
      backgroundColor: ['disabled']
    },
    plugins: [
      plugin(function({ addVariant, e }) {
      addVariant('disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`
        })
      })
    })
  ],
  }
}