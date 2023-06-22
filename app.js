const express = require('express');
const routes = require("./routes");
const {connectToDatabase} = require('./database/connect');
const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + 'public'));

connectToDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});