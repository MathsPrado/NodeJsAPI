'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//importa esses dados pro banco
const schema = new Schema ({
    //_id cria automático 
    nome: {
        type: String,
        required: true,
        trim: true
    },

    //compoem a url ex: Cadeira gamer = cadeira-gamer (Tem que ser unico)

    indicacao: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    nickname: {
        type: String,
        required: true,
        trim: true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    senha: {
        type: String,
        required: true,
        trim: true
    },

    postagem: [{
        type: String,
        required: true
    }]

    // image: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
});

module.exports = mongoose.model('Usuario', schema);