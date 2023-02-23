const express = require('express') //importando express
const app = express() // creamos una instancia app para inicializar express
const port = 8000

// creando middelware

const logger = (req, res, next) => {

  const { method, path, ip, protocol } = req;
  console.log({ method, path, ip, protocol });
  next()

}

// middleware

const time = (req, res, next) => {
  const date = Date.now()

  req.timeStamp = date;
  next()
}

// * vamos a atender una petición de tipo get
// * recibe 2 parametros
// ? la ruta para la petición
// ? callback
app.get('/', logger, time, (req, res) => {
  
  console.log(req.timeStamp);

  res.send('Hello World!')
})

app.post('/', logger, (req, res) => {
  res.send('Hello World! desde el post')
})

app.put('/', logger, (req, res) => {
  res.send('Hello World! desde el put')
})

app.delete('/', logger, (req, res) => {
  res.send('Hello World! desde el delete') 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 