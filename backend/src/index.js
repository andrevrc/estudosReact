// Importando o framework 'express' para dentro de uma variável "express". 
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //"./" porque é um arquivo e não um pacote. Assim, indicamos o caminho relativo.
// Instânciando a variável express. A variável app será a nossa aplicação propriamente dita.
const app = express();

app.use(cors());
app.use(express.json()); // Indica que o método POST utilizará o JSON como formato de recebimento de arquivo.
app.use(routes);
// Assim, precisamos antes de colocar para funcionar, colocar a primeira rota. Para isso, fazemos:
/*app.get('/', (request, response) => {
    return response.send("Hello World"); //Será enviado essa resposta "Hello World" para o navegador que fez a requisição.
});*/

/* A rota é o caminho completo, o comando total e o recurso, que vem depois da "/" */




app.listen(3333); //Será escutado a porta 3333 do navegador para a aplicação funcionar.

/*
    Para rodar a aplicação, fazendo 'node index.js'.
    Ao colocar no navegador 'localhost:3333' podemos ver que existe uma resposta.
*/