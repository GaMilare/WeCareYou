require('../models/usuario-model');
const base = require('../bin/base/repository-base');
const md5 = require('md5');

class usuarioRepository{
    
    constructor() {
        this._base = new base('usuario');
        this.projection = 'nome email _id celular isPrestador localizacao';
    }

    async isEmailExistente(Email) {
        return await this._base._model.findOne({ email: Email }, this.projection)
    }

    async authenticate(cpf,senha){
        console.log(cpf, senha);
        let _hashSenha = md5(senha);
        return await this._base._model.findOne({cpf: cpf, senha:_hashSenha}, this.projection);
    }

    async create(data) {
        let usuarioCriado = await this._base.create(data)
        return this._base._model.findById(usuarioCriado.id, this.projection);
    }

    async update(id, data) {
        let ususarioAtualizado = await this._base.update(id, 
            {
                nome: data.nome,
                email: data.email,
                foto: data.foto
            });
        return this._base._model.findById(ususarioAtualizado._id, this.projection);
    }

    async getAll() {
        return await this._base._model.find({});
    }

    async getById(id) {
        return await this._base._model.findById(id);
    }

    async delete(id){
        return await this._base.delete(id);
        
    }
}

module.exports = usuarioRepository;