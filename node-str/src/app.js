'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');


        //conecta ao banco
mongoose.connect('mongodb+srv://YellowLemon:123@ndstr-n1rdl.mongodb.net/test?retryWrites=true&w=majority');

//Carrega os models
const Product = require('./models/product');
const Usuario = require('./models/usuario');

        //Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const usuarioRoute = require('./routes/usuario-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/usuario', usuarioRoute);

module.exports = app;

