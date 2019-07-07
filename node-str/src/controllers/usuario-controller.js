'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario'); 
const validation = require('../validators/validator');
const repository = require('../repositories/usuario-repository');

exports.post = (req, res, next) =>
{

        //salva no banco;
    repository.create(req.body)
        .then(x => {
        res.status(201).send({ message: ' Usuario cadastrado com sucesso!'});

    }).catch (e => {
        res.status(400).send({ message: ' Falha a cadastrar o usuário!', data: e});

    }); 
   
};


exports.put = (req, res, next) =>
{
    repository.update(req.params.id, req.body)
    .then(x => {

        res.status(201).send({ message: ' Perfil atualizado com sucesso!'});
    }).catch (e => {

        res.status(400).send({ message: ' Falha a autualizar o usuario!', data: e});
    }); 
};

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

  exports.delete = (req, res, next) =>
  {
      repository.delete(req.body.id)
      .then( x=> {
          res.status(200).send({message: 'Usuário apagado com sucesso'})
      })
  }

  exports.getById = (req, res, next) =>{
      repository.getById(req.params.id).then(data => {
        res.status(200).send(data);

      }).catch (e => {
        res.status(201).send(e);
    }); 
  }
