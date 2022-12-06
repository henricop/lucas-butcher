const { readFile } = require('fs/promises');


class VendasController {
  async index(request, response) {
   const database = JSON.parse(await readFile('./src/database.json'));

   return response.json({produtos: database.produtos})
 }
}

module.exports = new VendasController();
