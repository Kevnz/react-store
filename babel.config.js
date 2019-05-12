const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
]
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
module.exports = {
  plugins,
  presets: ['@babel/preset-env', '@babel/preset-react'],
}
