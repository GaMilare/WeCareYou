const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configurations/variables');

//router
const prestadorRouter = require('../routes/prestador-route');
const agendamentoRouter = require('../routes/agendamento-router');
const usuarioRouter = require('../routes/usuario-router');
const servicoRouter = require('../routes/servico-router');

//criando api do Express;
const app = express();

//config de parse do Json;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Config da connectionString
mongoose.connect(variables.DataBase.connection, {useNewUrlParser:true});

mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
  });
  
mongoose.connection.once('open', function() {
    console.log('Database connected');
  });

//criando as rotas
app.use('/api/prestador', prestadorRouter);
app.use('/api/agendamento', agendamentoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/servico', servicoRouter);


//exportando a API;
module.exports = app;