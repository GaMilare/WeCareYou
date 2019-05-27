'use strict'

const prestadorRepository = require('../repositories/prestador-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new prestadorRepository();

function prestadorController() {

}

prestadorController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    //validações
    ctrlBase.post(_repo,_validationContract,req,res);
};

prestadorController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    //validações
    ctrlBase.put(_repo,_validationContract,req,res);
};

prestadorController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo,req,res);
};

prestadorController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo,req,res);
};
prestadorController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo,req,res);
};


module.exports = prestadorController;