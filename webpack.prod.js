//https://webpack.js.org/configuration/mode/
const HtmlWPP        = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");

const CssMinimizer   = require("css-minimizer-webpack-plugin");
const Terser         = require("terser-webpack-plugin");

module.exports = {
  
 mode: 'production',

 output: {
  clean: true,
  filename: 'main.[contenthash].js'
 },

   module: {
    rules:[
       {
      //busca un archivo html
          test: /\.html$/,
          loader: 'html-loader',
          options: {
                sources: false
          }
        },
        {
          test: /\.css$/,
          exclude: /style.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /style.css$/,
          use: [MiniCssExtract.loader, 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },

   optimization: {
     minimize: true,
     minimizer: [
      new CssMinimizer(),
      new Terser(),
    ]
   },

   plugins: [
     new HtmlWPP({
      title: 'Mi webpack App',
      //filename: 'index.html'
      template: './src/index.html'
     }),

     new MiniCssExtract({ 
       filename: '[name].[fullhash].css',//tambien vale newStyle.css o el que quieras, así le añade el mismo nombre//hago un has([name].[fullhash].css1) 
       ignoreOrder: false

     }),

     new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
    
      ],
    }),
   ]
}