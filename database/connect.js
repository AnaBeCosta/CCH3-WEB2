const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://adm:123@projetos.yu7r5mm.mongodb.net/WEB2CCH3?retryWrites=true&w=majority';


async function connectToDatabase() {
    try {
      await mongoose.connect(dbURL);
      console.log('Conectado ao MongoDB');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
}
 
module.exports = {connectToDatabase};