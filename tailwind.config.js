const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = (isProd) => ({
    prefix: '',
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    purge: {
      enabled: isProd,
      content: ['**/*.html', '**/*.ts']
    },
    theme: {
      fontFamily: {
          display: ['Raleway', ...defaultTheme.fontFamily.sans],
          body: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
      require('@tailwindcss/ui')({
        layout: 'sidebar',
      })
    ]
});
