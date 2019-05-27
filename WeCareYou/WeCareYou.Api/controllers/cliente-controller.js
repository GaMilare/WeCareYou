'use strict'

const clienteRepository = require('../repositories/cliente-repository');

function clienteController() {

}

clienteController.prototype.post = async (req, res) => {
    let result = await new clienteRepository().create(req.body);
    res.status(201).send(result);
};

clienteController.prototype.put = async (req, res) => {
    let result = await new clienteRepository().update(req.params.id, req.body);
    res.status(202).send(result);
};

clienteController.prototype.get = async (req, res) => {
    let result = await new clienteRepository().getAll();
    res.status(200).send(result);
};

clienteController.prototype.getById = async (req, res) => {
    let result = await new clienteRepository().getById(req.params.id);
    res.status(200).send(result);
};
clienteController.prototype.delete = async (req, res) => {
    let result = await new clienteRepository().delete(req.params.id);
    res.status(204).send(result);
};


module.exports = clienteController;