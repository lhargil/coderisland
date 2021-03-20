const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProd,
    content: [
      './apps/?(home-cooked)/**/*.html',
      './apps/?(home-cooked)/**/*.ts',
      './libs/+({home-cooked,shared})/**/*.html',
      './libs/+({home-cooked,shared})/**/*.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled']
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
});
