'use strict'

const app = require('../WeCareYou.Api/bin/express');
const variables = require('../WeCareYou.Api/bin/configurations/variables');

app.listen(variables.Api.port, ()=>{
    console.info('Api inicializada com sucesso na porta ' + variables.Api.port + '.');
})