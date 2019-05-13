const webpack = require('webpack')

const path = require('path')


const baseConfig = {
  entry: './src/ui/index.js',
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: [
           'style-loader',
          'css-loader?modules',
        ],
      },
      {
        test: /\.s[ca]ss$/,
        loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
    alias: {

    },
  },
}

const devConfig = {

  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"development"',
        },
      },
    }),
  ],
}

module.exports = {
  ...baseConfig,
  ...devConfig,
}
