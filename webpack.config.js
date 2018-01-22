//Com este arquivo de configuração preparado podemos executar no terminal apenas o comando
//webpack (sem parâmetros), desta forma ele vai ler o resto dos parametros a partir
//deste arquivo
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  entry: './src/js/app/app.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
     //Não usar parametro 'filename:' pois isto vai impedir
  },                           //o funcionamento do Hot Module Replacement
  devtool: 'source-map',//use isto para usar o código original (TypeScript, Coffee Script, etc)
                       //no debugger. Se não adicionar isto ele vai usar o bundle mesmo
  module: {
    loaders: [
        // {
        //   test: /\.ts$/,
        //   include: ['src/ts'],
        //   loader: 'ts-loader'
        // },
        //----------------------------
        // {
        //   test: /\.css$/,
        //   include: ['src/css'], //esta configuração
        //   loader: 'style!css'
        // }
        //----------------------------
        {
         test: /\.css$/,
         exclude: /node_modules/,
         loaders: ['style-loader', 'css-loader']
        }
    ]
  },
  plugins: [
  new UglifyJsPlugin()
]
}
