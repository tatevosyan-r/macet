const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
      clean: true,
      publicPath: './',
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

        // Обработка изображений - все в корень img без вложенных папок
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'  // Все файлы прямо в img/
          }
        },

        
       
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: isProduction
      }),

      // Копируем Swiper CSS
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/swiper/swiper-bundle.min.css',
            to: 'css/[name][ext]'
          }
        ],
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

    resolve: {
      extensions: ['.js', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@img': path.resolve(__dirname, 'src/img'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@css': path.resolve(__dirname, 'src/css'),
      },
    },
  };
};