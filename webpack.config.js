const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  // Для GitHub Pages используем относительные пути
  const isGitHubPages = process.env.NODE_ENV === 'gh-pages';

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
      clean: true,
      publicPath: isGitHubPages ? './' : '/',
    },

    mode: isProduction ? 'production' : 'development',

    devServer: {
      static: './dist',
      hot: true,
      open: true,
      port: 3001,
    },

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    module: {
      rules: [
        // Обработка HTML
        {
          test: /\.html$/i,
          use: ['html-loader'],
        },

        // Обработка CSS
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ],
        },

        // Обработка шрифтов
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },

        // Обработка изображений
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        },

        // Babel для современного JS
        {
          test: /\.js$/,
          exclude: /node_modules|\.min\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: isProduction
      }),

      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
        })
      ] : []),
    ],

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};