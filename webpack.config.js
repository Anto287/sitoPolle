const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      publicPath: isProduction ? '/sitoPolle/' : '/'
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.json$/, 
          use: ['json-loader']
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }), 
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'build'),
      },
      compress: true,
      port: 3000,
    },
  };
};
