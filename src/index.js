const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable')

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    glow: value => {
      const { '--tw-glow-opacity': opacity, color } = withAlphaVariable({
        color: value,
        property: 'color',
        variable: '--tw-glow-opacity',
      })
      return {
        '--tw-glow-opacity': opacity,
        color: color,
        'box-shadow': `0 0 9px 0 ${color}`,
      }
    },
  }, {
    values: flattenColorPalette(theme('glowColor')),
    type: ['color', 'any'],
  })

  matchUtilities({
    'glow-opacity': value => ({
      '--tw-glow-opacity': value,
    }),
  }, { values: theme('glowOpacity') })
})
