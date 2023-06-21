const mongoose = require('mongoose');

const Pessoa  = mongoose.Schema({
    nome: {
      type: String,
      required: true,
      unique: true
    },
    cpf: {
      type: String,
      require: true,
      unique: true
    },
    cep: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      require: true
    }
  });

module.exports = mongoose.model('Pessoa', Pessoa);