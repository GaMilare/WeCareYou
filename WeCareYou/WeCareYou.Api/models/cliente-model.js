'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const clienteModel = new schema({
    nome: {index:true, required:true, type:String},
    cpf: {type:String},
    foto: {type:String, required: true},
    localizacao: {type:String, required: true},
    dadosBancarios: {type:String, required:true},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type:Date, default:Date.now}
}, {versionKey:false});

clienteModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
        next();
});

module.exports = mongoose.model('cliente', clienteModel);