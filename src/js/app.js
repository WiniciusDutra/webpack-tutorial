const { sayHelloTo } = require('./hello');//importando o módulo hello

const span = document.createElement('span');//criando elemento span

span.innetText = sayHelloTo('Desenvolvedor Javascript');//chamando função hello e passando parametro

document.body.appendChild(span);//incluindo o span dentro do body
