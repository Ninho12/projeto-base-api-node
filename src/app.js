// Arquivo Responsavel pelo Projeto

const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
app.use('/', index);
app.use('/users', userRoute);

// Exportando...
module.exports = app;