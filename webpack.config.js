const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    publicPath: './',
  },

  mode: 'production',

  module: {
    rules: [
      // CSS файлы
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      
      // Шрифты
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      
      // Изображения
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      
      // Swiper JS
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
    // HTML
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true // Автоматически добавляет script и link теги
    }),
    
    // CSS
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};