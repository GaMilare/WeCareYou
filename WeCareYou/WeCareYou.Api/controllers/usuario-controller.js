'use strict'

const usuarioRepository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const controllerBase = require('../bin/base/controller-base');
const md5 = require('md5');
const _repo = new usuarioRepository();
const jwt = require('jsonwebtoken');
const variables = require('../bin/configurations/variables');

function usuarioController() {

}

usuarioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, "Infrome seu nome");
    _validationContract.isRequired(req.body.email, "Infrome seu e-mail");
    _validationContract.isEmail(req.body.email, "Seu e-mail informado é invalido");
    _validationContract.isRequired(req.body.senha, "A senha informada é obrigatoria");
    _validationContract.isRequired(req.body.senhaConfirmacao, "A snha informada é obrigatoria");
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, "A senha e a confirmacao sao distintas");

    let usuarioExistente = false//await _repo.isEmailExistente(req.body.email);
    if (usuarioExistente) {
        _validationContract.isTrue(usuarioExistente.nome != undefined, "Já existe o email cadastrado");

    }
    //senha criptografada
    req.body.senha = md5(req.body.senha);
    controllerBase.post(_repo, _validationContract, req, res);

};

usuarioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, "Infrome seu nome");
    _validationContract.isRequired(req.body.email, "Infrome seu e-mail");
    _validationContract.isEmail(req.body.email, "Seu e-mail informado é invalido");
    console.log(req.params);
    _validationContract.isRequired(req.params.id, "Informe o Id do usuario");

    let usuarioExistente = await _repo.isEmailExistente(req.body.email);
    if (usuarioExistente) {
        _validationContract.isTrue(usuarioExistente.nome != undefined &&
            usuarioExistente._id != req.params.id,
            "Já existe o email cadastrado");
    }
    controllerBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async (req, res) => {
    console.log("metodo de busca")
    console.log(req.body)
    controllerBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repo, req, res);

};
usuarioController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repo, req, res);
};

usuarioController.prototype.autenticar = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.email, "Informe seu e-mail");
    _validationContract.isEmail(req.body.email, "Seu e-mail informado é invalido");
    _validationContract.isRequired(req.body.senha, "Informe sua senha");

    if (!_validationContract.isValid()) {

        res.status(400).send({ message: "Não foi possivel efetuar login", validation: _validationContract.errors() })
        return;
    }

    let usuarioExistente = await _repo.authenticate(req.body.email, req.body.senha);
    if (usuarioExistente) {
        res.status(200).send({
            usuario: usuarioExistente,
            token: jwt.sign({ user: usuarioExistente }, variables.Security.secretKey)
        });

    } else {
        res.status(404).send({
            message: "User e psw invalidos"
        });
    }
};


module.exports = usuarioController;