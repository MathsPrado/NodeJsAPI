'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product'); 
const validation = require('../validators/validator');
const repository = require('../repositories/product-repository');

exports.get =  async(req, res, next) =>{
  try{ 
      var data = await repository.get();
      res.status(200).send(data);

  }catch(e){
    res.status(500).send({
        message: 'Falha ao processar sua requisição'
    });
  }
}

exports.getBySlug =  (req, res, next) =>{
   repository.getBySlug(req.params.slug)
    .then(data => {
        res.status(200).send(data);
    }).catch (e => {

        res.status(400).send(e);
    }); 
}

exports.getById =  (req, res, next) =>{
    repository.getById(req.params.id)
    .then(data => {
        res.status(200).send(data);

    }).catch (e => {

        res.status(400).send(e);

    }); 
}

exports.getByTag =  (req, res, next) =>{
   repository.getByTag(req.params.tag)
    .then(data => {
        res.status(200).send(data);

    }).catch (e => {
        res.status(400).send(e);
    }); 
}


exports.post = (req, res, next) =>
{  
    // outra forma de pegar especifico obs: e mais valido pois da menos erro!;
    // var product = new Product();
    // product.title = new Product();

        //salva no banco;
    repository.create(req.body)
        .then(x => {

        res.status(201).send({ message: ' Produto cadastrado com sucesso!'});

    }).catch (e => {

        res.status(400).send({ message: ' Falha a cadastrar o produto!', data: e});

    });  
};


exports.put = (req, res, next) =>
{
    repository.update(req.params.id, req.body)
    .then(x => {

        res.status(201).send({ message: ' Produto atualizado com sucesso!'});
    }).catch (e => {

        res.status(400).send({ message: ' Falha a autualizar o produto!', data: e});
    }); 
};


 exports.delete = (req, res, next) =>
 {
     repository.delete(req.body.id)
    .then(x => {

        res.status(200).send({ message: ' Produto apagado com sucesso!'});
    }).catch (e => {

        res.status(400).send({ message: ' Falha a apagar o produto!', data: e});
    }); 
 };



// Livro noSql Distiled - Martin Fowler"