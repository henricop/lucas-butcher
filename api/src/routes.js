const { Router } = require('express');
const VendasController = require('./Controllers/VendasController');


const routes = Router();

routes.get('/vendas', VendasController.index);
// routes.post('/produto', VendasController.index);

module.exports = routes;
