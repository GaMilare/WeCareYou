'use strict'

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario-controller');
const auth = require('../middlewares/authentication');

let _ctrl = new usuarioController();

router.post('/autenticar', _ctrl.autenticar);

router.post('/register', _ctrl.post);

router.get('/',  _ctrl.get);

router.get('/:id',  _ctrl.getById);

router.post('/', _ctrl.post);

router.put('/:id',  _ctrl.put);

router.delete('/:id',  _ctrl.delete);

module.exports = router;