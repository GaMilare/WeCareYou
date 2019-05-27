'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const prestadorModel = new schema({
    nome: {index:true, required:true, type:String},
    cpf: {type:String},
    foto: {type:String,required: false},
    servico: {type: Object, required:true},
    localizacao: {type: Object, required: true},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type:Date, default:Date.now}
}, {versionKey:false});

prestadorModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
        next();
});

module.exports = mongoose.model('prestador', prestadorModel);