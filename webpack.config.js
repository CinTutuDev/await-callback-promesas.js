//https://webpack.js.org/configuration/mode/
const HtmlWPP        = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");


module.exports = {
  
 mode: 'development',

 output: {
  clean: true
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
        }
      ]
    },

   optimization: {},

   plugins: [
     new HtmlWPP({
      title: 'Mi webpack App',
      //filename: 'index.html'
      template: './src/index.html'
     }),

     new MiniCssExtract({ 
       filename: '[name].css',//tambien vale newStyle.css o el que quieras, así le añade el mismo nombre//hago un has([name].[fullhash].css1) 
       ignoreOrder: false

     }),

     new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
    
      ],
    }),
   ]
}