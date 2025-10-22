const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    publicPath: './', // Относительные пути
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../' // Для корректных путей к картинкам в CSS
            }
          },
          'css-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      // Правило для swiper JS файлов
      {
        test: /swiper-bundle\.min\.js$/,
        type: 'asset/resource',
        generator: {
          filename: 'swiper/[name][ext]'
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    // Копируем swiper CSS
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/swiper/swiper-bundle.min.css',
          to: 'swiper/[name][ext]'
        }
      ],
    }),
  ],
};