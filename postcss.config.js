const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./components/**/*.js', './pages/**/*.js'],
    whitelist: ['body', 'html'],
    defaultExtractor: content => {
      // console.log('extract', content.match(/[\w-/:]+(?<!:)/g) || [])
      return content.match(/[\w-/:]+(?<!:)/g) || []
    },
    whitelistPatterns: [/^keyframes/],
  },
]
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
