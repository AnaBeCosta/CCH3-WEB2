const mongoose = require('mongoose');

const Venda = mongoose.Schema({
    data_venda: {
      type: Date,
      required: true,
    },
    produto: {
      type: Array, 
      "default": []
    },
    cliente: {
      type: String,
      required: true,
      unique:true
    }
  });

module.exports = mongoose.model('Venda', Venda);