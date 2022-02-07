//exemplo de estouro de memoria que gera muitos listeners conforme o povo usa - MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
// instale o npm i -d climem | para detectar estes problemas
//npm start inicia pela variavel 'start' criada no package.json
import Events from 'events';
import { createServer } from 'http'
import { randomBytes } from 'crypto'

const myEvent = new Events();

function getBytes(){
    return randomBytes(10000);
}

function onData(){

}

function handler(request, response){ //a cada requisição
    myEvent.on('DatA', onData); //coloca alguem para ouvir esse evento
    myEvent.emit('DatA', Date.now()); //disparar contra ele
    response.end('FuncioandO!');
}

const server = new createServer();
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`servidor rodando na porta ${port}`));


