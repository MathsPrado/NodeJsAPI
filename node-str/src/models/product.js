'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    //_id cria automático 
    title: {
        type: String,
        required: true,
        trim: true
    },

    //compoem a url ex: Cadeira gamer = cadeira-gamer (Tem que ser unico)
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    tags: [{
        type: String,
        required: true
    }],

    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);