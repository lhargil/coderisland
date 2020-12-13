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
      '../apps/resume-builder/**/*.html',
      '../apps/resume-builder/**/*.ts',
      '../libs/resume-builder/**/*.html',
      '../libs/resume-builder/**/*.ts',
      '../libs/shared/**/*.html',
      '../libs/ui-kit/**/*.ts',
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
        cyan: colors.cyan,
        'cool-gray': colors.coolGray,
      },
      screens: {
        print: { raw: 'print' },
      },
      fontFamily: {
        display: ['Raleway', ...defaultTheme.fontFamily.sans],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      customForms: (theme) => ({
        invalid: {
          'multiselect, checkbox, radio': {
            'border-bottom-color': theme('colors.red.300'),
            'border-bottom-width': theme('borderWidth.2'),
            '&::placeholder': {
              color: theme('colors.red.300'),
            },
            '&:focus': {
              boxShadow: theme('boxShadow.outline-red'),
              borderColor: theme('colors.red.300'),
              'border-bottom-width': theme('borderWidth.2'),
            },
          },
        },
        valid: {
          multiselect: {
            'border-bottom-color': theme('colors.green.300'),
            'border-bottom-width': theme('borderWidth.2'),
          },
        },
      }),
    },
  },
  variants: {
    borderWidth: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
    ],
    backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus', 'last', 'first'],
    padding: ['responsive', 'hover', 'focus', 'last'],
    placeholderColor: ['responsive', 'focus', 'hover', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addComponents, theme, config }) {
      const formControlStyles = {
        '.control-invalid': {
          '& input, & textarea, & select': {
            'border-bottom-color': theme('colors.red.300'),
            'border-bottom-width': theme('borderWidth.2'),
            '&::placeholder': {
              color: theme('colors.red.300'),
            },
            '&:focus': {
              boxShadow: theme('boxShadow.outline-red'),
              borderColor: theme('colors.red.300'),
              'border-bottom-width': theme('borderWidth.2'),
            },
          },
        },
        '.control-valid': {
          '& input, & textarea, & select': {
            'border-bottom-color': theme('colors.green.300'),
            'border-bottom-width': theme('borderWidth.2'),
          },
        },
      };
      addComponents(formControlStyles);
    }),
  ],
});
