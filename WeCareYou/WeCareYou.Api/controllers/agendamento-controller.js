'use strict'

const agendamentoRepository = require('../repositories/agendamento-repository');

function agendamentoController() {

}

agendamentoController.prototype.post = async (req, res) => {
    console.log(req.body)
    let result = await new agendamentoRepository().create(req.body);
    res.status(201).send(result);
};

agendamentoController.prototype.put = async (req, res) => {
    let result = await new agendamentoRepository().update(req.params.id, req.body);
    res.status(202).send(result);
};

agendamentoController.prototype.get = async (req, res) => {
    let result = await new agendamentoRepository().getAll();
    res.status(200).send(result);
};

agendamentoController.prototype.getById = async (req, res) => {
    console.log(req.params.id)
    let result = await new agendamentoRepository().getById(req.params.id);
    res.status(200).send(result);
};
agendamentoController.prototype.delete = async (req, res) => {
    let result = await new agendamentoRepository().delete(req.params.id);
    res.status(204).send(result);
};


module.exports = agendamentoController;