module.exports = {
  plugins: [
    require('tailwindcss')({
      config: './demo/tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
}
