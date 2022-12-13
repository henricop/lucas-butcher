const { Router } = require('express');
const ProdutosController = require('./Controllers/ProdutosController');
const VendasController = require('./Controllers/VendasController');


const routes = Router();

routes.get('/vendas', VendasController.index);
routes.get('/vendas/:id', VendasController.read);
routes.get('/vendas-delete/:id', VendasController.delete);
routes.get('/produtos', ProdutosController.index);
// routes.post('/produto', VendasController.index);

module.exports = routes;
