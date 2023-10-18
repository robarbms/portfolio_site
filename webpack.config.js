const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


module.exports = (env, argv) => {
  const styleTypings = {
    loader: 'typings-for-css-modules-loader',
    options: {
      modules: true,
      namedExport: true
    }
  };
  const opts = {
    production: {
      path: 'dist',
      cssloader: ['style-loader', 'css-loader'],
      htmlmin: {
        collapseWhitespace: true,
        removeComments: true,
      },
      optimization: {
        minimizer: [
          new TerserPlugin(),
          new CssMinimizerPlugin(),
        ],
        minimize: true
      },
      watch: false
    },
    development: {
      path: 'dev',
      cssloader: ['style-loader', 'css-loader'],
      htmlmin: {},
      optimization: {},
      watch: true
    }
  }
  const {mode} = argv;
  const options = opts[mode];

  return {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, options.path),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: options.cssloader,
      },
      {
          test: /\.(jpg|png|svg|gif|ttf|pdf|webp|ico)$/,
          type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
  ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: options.htmlmin,
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  optimization: options.optimization,
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  watch: options.watch
}
}