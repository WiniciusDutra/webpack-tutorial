const {sayHelloTo} = require('./hello.js');//importando o módulo hello

const span = document.createElement('span');//criando elemento span

span.innerText = sayHelloTo('Desenvolvedor Javascript');//chamando função hello e passando parametro

document.body.appendChild(span);//incluindo o span dentro do body
