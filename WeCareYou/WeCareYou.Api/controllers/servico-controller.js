'use strict'

const servicoRepository = require('../repositories/servico-repository');
const validation = require('../bin/helpers/validation');
const controllerBase = require('../bin/base/controller-base');
const _repo = new servicoRepository();

function servicoController() {

}

servicoController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.code, "Informe o codigo do servico");
    _validationContract.isRequired(req.body.nome, "Informe o nome do servico");
    
    let servicoExistente = await _repo.isCodeExistente(req.body.code);
    if (servicoExistente) {
        _validationContract.isTrue(servicoExistente.nome != undefined, "Já existe o servico cadastrado");

    }
    controllerBase.post(_repo, _validationContract, req, res);

};

servicoController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.code, "Informe o codigo do servico");
    _validationContract.isRequired(req.body.nome, "Informe o nome do servico");
    
    let servicoExistente = await _repo.isCodeExistente(req.body.code);
    if (servicoExistente) {
        _validationContract.isTrue(servicoExistente.nome != undefined &&
            servicoExistente._id != req.params.id,
            "Já existe o servico cadastrado");
    }
    controllerBase.put(_repo, _validationContract, req, res);
};

servicoController.prototype.get = async (req, res) => {
    controllerBase.get(_repo, req, res);
};

servicoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repo, req, res);

};
servicoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repo, req, res);
};

module.exports = servicoController;