//Com este arquivo de configuração preparado podemos executar no terminal apenas o comando
//webpack (sem parâmetros), desta forma ele vai ler o resto dos parametros a partir
//deste arquivo

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './build/bundle.js'
  }
}
