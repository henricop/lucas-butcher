 const { readFile } = require('fs/promises');


 class VendasController {
   async index(request, response) {
    const database = JSON.parse(await readFile('./src/database.json'));

    // const returnSomenthing = database.vendas[0].produtos?.map(elem => elem.nome)
    return response.json({vendas: database.vendas})
  }
}

module.exports = new VendasController();
