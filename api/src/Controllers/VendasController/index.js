 const { json } = require('express');
const { readFile } = require('fs/promises');


 class VendasController {
   async index(request, response) {
    const database = JSON.parse(await readFile('./src/database.json'));

    // const returnSomenthing = database.vendas[0].produtos?.map(elem => elem.nome)
    return response.json({vendas: database.vendas})
  }

  async read(request, response){
    const database = JSON.parse(await readFile('./src/database.json'));
    const id = request.params.id;

    if(response.status === 404){
      response.status(404).send('Venda não encontrada!');
    }
    
    if(database.vendas.length <= 0){
      return;
    }

    const venda = database.vendas.filter((elem, index) => {
      if(elem.id == id){
        return elem;
      }
    });

    return response.json(venda);

  }

  async delete(request, response){
    const database = JSON.parse(await readFile('./src/database.json'));
    const id = request.params.id;

    if(response.status === 404){
      response.status(404).send('Venda não encontrada!');
    }
    
    if(database.vendas.length <= 0){
      return;
    }

    const venda = database.vendas.filter((elem, index) => {
      if(elem.id == id){
        return;
      }
      return elem;
    });

    return response.json(venda);

  }
}

module.exports = new VendasController();
