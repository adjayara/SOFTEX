const express = require('express')
const app = express()
//const rotas = require('./routes/rotas');
const port = 3000

  
app.get('/', function (req, res) {
  res.send('Hello World!');
});
  
app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost:${port}`)
});
