const mongoose = require('mongoose');

const Produto = mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      enum: ['Eletrônicos', 'Vestuário', 'Decoração', 'Cosméticos'],
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    }
  });

module.exports = mongoose.model('Produto', Produto);