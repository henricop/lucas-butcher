const express = require('express')
const routes = require('./src/routes')
var cors = require('cors')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send('Everything it is ok ! ')
})

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})