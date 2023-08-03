
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '470px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'primary': '#F06F46',
        'secondary': '#353535',
        'light': '#CCCCCC',
        'dark': '#181818',
        'shadow': 'rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        roboto: 'RobotoCondensed'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem'
      }
    },
    backgroundImage: {
      'wallpaper': 'url("./assets/images/wallpaper.jpg")'
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}