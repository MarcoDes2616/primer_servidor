const express = require('express') //importando express
const app = express() // creamos una instancia app para inicializar express
const port = 8000
const morgan = require("morgan")
const exampleRoute = require("./routes/example.route")

// creando middelware

// const logger = (req, res, next) => {

//   const { method, path, ip, protocol } = req;
//   console.log({ method, path, ip, protocol });
//   next()
// }

// middleware

const time = (req, res, next) => {
  const date = Date.now()

  req.timeStamp = date;
  next()
}

app.use(time);
app.use(morgan("dev")); //creando un logger con morgan
app.use(express.json());



// * vamos a atender una petición de tipo get
// * recibe 2 parametros
// ? la ruta para la petición
// ? callback
// todos los miggleware se fuero a rutas

app.use(exampleRoute); //moddleware a nivel de rutas


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 


// * Crear un nuevo proyecto de node

// * Vas a poner los siguientes middlewares

// * morgan con formato tiny, express.json()

// * y tu servidor debe atender las siguietnes peticiones

// ? GET en la ruta /users y debe responder 'Esto es un GET a users desde mi servidor'

// ? POST en la ruta /users ( enviar un json en el body ) responder el mismo objeto

// TODO tienen que investigar como responder un json en express  (res.status(200).json({}))

 

// ! Necesario tener tu archivo app.js

// ! crear una carpeta para las rutas con un archivo llamado user.routes.js