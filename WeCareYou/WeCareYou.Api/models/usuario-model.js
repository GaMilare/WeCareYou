'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioModel = new schema({
    nome: {index:true, required:true, type:String},
    isPrestador:{type:Boolean, required:true},
    email:{type:String, required:true},
    cpf: {type:String, required: true},
    coren: {type:String},
    celular: {type:String, required: true},
    senha:{type:String, required:true},
    senhaConfirmacao:{type:String, required:true},
    servicos: {type: Object},
    localizacao: {type: Object, required: true},
    dadosPagamento: {type: Object, required: true},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type:Date, default:Date.now}
}, {versionKey:false});

usuarioModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
        next();
});

module.exports = mongoose.model('usuario', usuarioModel);