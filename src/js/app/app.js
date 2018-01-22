require("./../../css/index.css");
const { sayHelloTo }= require('./hello.js');//importando o módulo hello

const span = document.createElement('span');//criando elemento span

span.innerText = sayHelloTo('Desenvolvedor!');//chamando função hello e passando parametro

document.body.appendChild(span);//incluindo o span dentro do body

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(()=> span.parentNode.removeChild(span));
}
