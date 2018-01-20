//Com este arquivo de configuração preparado podemos executar no terminal apenas o comando
//webpack (sem parâmetros), desta forma ele vai ler o resto dos parametros a partir
//deste arquivo

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './build/bundle.js' //Não usar parametro 'filename:' pois isto vai impedir
  },                           //o funcionamento do Hot Module Replacement
  devtool: 'source-map' //use isto para usar o código original (TypeScript, Coffee Script, etc)
}                       //no debugger. Se não adicionar isto ele vai usar o bundle mesmo
