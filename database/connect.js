const mongoose = require('mongoose');
const dbURL = 'Insira aqui';


async function connectToDatabase() {
    try {
      await mongoose.connect(dbURL);
      console.log('Conectado ao MongoDB');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
}
 
module.exports = {connectToDatabase};