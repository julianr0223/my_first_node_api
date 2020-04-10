// configuracion servidor
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// CONFIGURACIÓN Y CONEXIÓN CON BD
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
})
.then(() => console.log('Conexión a base de datos exitosa'))
.catch(err => {
    console.log('No se pudo conectar a la base de datos...', err)
    process.exit
})


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Apicación de prueba API REST node js - expres - mongo db"});
});

// ROUTES API
// API saludos
require('./app/routes/greeting.routes')(app)

// API machine
require('./app/routes/machine.routes')(app)

var port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Mi API rest está corriendo en el puesto ${port}`)
})






