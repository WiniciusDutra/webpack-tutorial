const { exclaim }= require('./../helpers/exclaim');

const sayHelloTo = name => exclaim(`Olá, ${name}`); //criando função Hello

module.exports = { //exportando a função Hello
  sayHelloTo
}
