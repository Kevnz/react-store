const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime',
]
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '52',
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
  ],
}
