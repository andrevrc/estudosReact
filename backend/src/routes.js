const express = require('express');
const crypto = require('crypto');

const SessionController = require('./controllers/SectionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

// const connection = require('./database/connection');

const routes = express.Router(); // Indica que esse será um arquivo de rota.

// routes.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');
//     return response.json(ongs);
// });

// routes.post('/ongs', async (request, response) => {
//     const {name, email, whatsapp, city, uf} = request.body; // const params = request.query; (acessamos a query)

//     const id = crypto.randomBytes(4).toString('HEX');    

//     await connection('ongs').insert({
//         id,
//         name,
//         email,
//         whatsapp,
//         city,
//         uf
//     });
//     /*return response.json({ // Alterando para enviar um json
//         "evento":"Semana OmniStack 11.0",
//         "aluno":"André Victor"
//     });*/ 

//     return response.json({ id });
// });

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; // Forma como exportamos um arquivo para ser usado externamente.