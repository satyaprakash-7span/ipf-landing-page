const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    // ...
    transitionDuration: true,
  },

  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        lightblue: colors.light,
        green: {
          100: '#9FD3CD',
          400: '#35BDB2',
          500: '#9FD3CD',
          800: '#1179A6',
        },
        blue: {
          400: '#35BDB2',
          800: '#1179A6',
        },

        transitionDuration: {},

        zIndex: {
          25: 25,
          50: 50,
          75: 75,
          100: 100,
          auto: 'auto',
        },
      },
    },
  },
  variants: {
    extend: {
      transitionDuration: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
}
