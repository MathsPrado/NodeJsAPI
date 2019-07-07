'use strict';

const express = require ('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/', controller.get);
router.get('/teste/:id',controller.getById);

module.exports = router;
