'use strict';

const express = require ('express');
const router = express.Router();
const controller = require('../controllers/product-controller');


router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/id', controller.put);


module.exports = router;
