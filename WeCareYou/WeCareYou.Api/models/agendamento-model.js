'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const agendamentoModel = new schema({
    nomeCliente: {index:true, required:true, type:String},
    clienteId:{type:String, required:true},
    statusCliente: {type:String},
    nomePrestador: {type:String},
    prestadorId: {type:String},
    statusPrestador: {type:String},
    cidade: {type:String},
    hora: {type:String},
    data: {type:String, required: true},
    endereco: {type:String, required: true},
    precoProposta: {type:String},
    precoFinal: {type:String},
    precoMedio: {type:String},
    servico: {type:String},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type:Date, default:Date.now}
}, {versionKey:false});

agendamentoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = agora;
        next();
});

module.exports = mongoose.model('agendamento', agendamentoModel);