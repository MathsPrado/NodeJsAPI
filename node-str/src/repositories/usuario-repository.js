'use strict';
const mongoose = require ('mongoose');
const Usuario = mongoose.model('Usuario');

exports.create = async(data) => {
    var usuario = new Usuario(data);
    await usuario.save();
}

exports.update = async(id, data) => {
    await Usuario
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                sobrenome: data.sobrenome,
                nickname: data.nickname
            }
        });

}
//não sei quais informações ira monstrar então deixei feito um que pega tudo..
exports.get = async() => {
    const res = await Usuario.find({
        active: true
    });
    return res;
}

//get by id
exports.getById = async(id)=>
{
    const res = await Usuario.findById(id);
    return res;
}

//DELETE
exports.delete = async(id) =>{
    await Usuario.findOneAndDelete(id);
}