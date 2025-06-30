const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true // Nettoie automatiquement dist/ à chaque build
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // <-- Assure-toi que ce fichier existe
        inject: true
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist') // <-- On sert dist/ maintenant, pas public/
      },
      port: 8080,
      historyApiFallback: true,
      open: true
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
  };
};
