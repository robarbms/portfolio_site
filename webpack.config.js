const Dotenv = require('dotenv-webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
  const is_report = argv.performanceHints && argv.performanceHints == 'warning';

  const styleTypings = {
    loader: 'typings-for-css-modules-loader',
    options: {
      modules: true,
      namedExport: true
    }
  };
  const plugins = (htmlmin) => [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: htmlmin,
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ];

  const prod_opts = {
    path: 'dist',
    cssloader: ['style-loader', 'css-loader'],
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
      minimize: true
    },
    plugins: plugins({
      collapseWhitespace: true,
      removeComments: true,
    }),
    watch: false
  };
  const opts = {
    production: prod_opts,
    development: {
      path: 'dev',
      cssloader: ['style-loader', 'css-loader'],
      optimization: {},
      plugins: plugins({}),
      watch: true
    },
    report: Object.assign({}, prod_opts, {
      plugins: [...prod_opts.plugins, new BundleAnalyzerPlugin()]
    })
  }
  const {mode} = argv;
  const options = opts[is_report ? "report" : mode];

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
  plugins: options.plugins,
  optimization: options.optimization,
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  watch: options.watch
}
}