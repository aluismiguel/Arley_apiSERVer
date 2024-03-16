var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app2 = express()
  .use(cors({ credentials: true, origin: 'http://localhost:4200' }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));
// 1. Ruta para manejar el registro de una persona-Cree una ruta que reciba los datos del registro de un usuario de la siguiente manera y consúmala con un
//cliente rest:
app2.post('/parametros-consulta/:edad', function (req, res) {
  let ciudad = req.query.ciudad;
  let departamento  = req.query.departamento;
  let edad = req.params.edad;
  let nombres = req.body.nombres;
  let apellidos = req.body.apellidos;
  let direccion =req.body.direccion;
  let autorizacion =req.header("autorizacion")
  console.log("----", nombres, apellidos)
  return res.status(201).json({
    "Status": "Registro ok",
    autorizacion:autorizacion,ciudad:ciudad,nombres:nombres,
  });
});
// Define el número de puerto
const PORT = 10101;

// Inicia el servidor
app2.listen(PORT, function () {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
