'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const servicoModel = new schema({
    code: {index:true, required:true, type:String},
    nome: {index:true, required:true, type:String},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type:Date, default:Date.now}
}, {versionKey:false});

servicoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
        next();
});

module.exports = mongoose.model('servico', servicoModel);