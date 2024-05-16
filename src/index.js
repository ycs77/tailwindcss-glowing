const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
const { default: toColorValue } = require('tailwindcss/lib/util/toColorValue')
const { default: transformThemeValue } = require('tailwindcss/lib/util/transformThemeValue')
const { formatBoxShadowValue, parseBoxShadowValue } = require('tailwindcss/lib/util/parseBoxShadowValue')

module.exports = plugin(({ matchUtilities, addDefaults, theme }) => {
  const transformValue = transformThemeValue('boxShadow')

  addDefaults(' glow', {
    '--tw-glow-shadow': '0 0 #0000',
    '--tw-glow-shadow-colored': '0 0 #0000',
  })

  matchUtilities({
    glow: value => {
      value = transformValue(value)

      let ast = parseBoxShadowValue(value)
      for (let shadow of ast) {
        // Don't override color if the whole shadow is a variable
        if (!shadow.valid) {
          continue
        }

        shadow.color = 'var(--tw-glow-color)'
      }

      return {
        '@defaults glow': {},
        '--tw-glow-shadow': value === 'none' ? '0 0 #0000' : value,
        '--tw-glow-shadow-colored': value === 'none' ? '0 0 #0000' : formatBoxShadowValue(ast),
        'box-shadow': 'var(--tw-glow-shadow)',
      }
    },
  }, { values: theme('glow'), type: ['shadow'] })

  matchUtilities({
    glow: value => {
      return {
        '--tw-glow-color': toColorValue(value),
        '--tw-glow-shadow': 'var(--tw-glow-shadow-colored)',
      }
    },
  }, { values: flattenColorPalette(theme('glowColor')), type: ['color', 'any'] })
}, {
  theme: {
    glow: {
      sm: '0 0 5px 0 rgb(0 0 0 / 0.1)',
      DEFAULT: '0 0 9px 0 rgb(0 0 0 / 0.1)',
      md: '0 0 12px 0 rgb(0 0 0 / 0.1)',
      lg: '0 0 18px 0 rgb(0 0 0 / 0.1)',
      xl: '0 0 25px 0 rgb(0 0 0 / 0.25)',
      '2xl': '0 0 50px 0 rgb(0 0 0 / 0.25)',
    },
    glowColor: ({ theme }) => theme('colors'),
  },
})
