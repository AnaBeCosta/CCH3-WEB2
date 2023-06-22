const express = require('express');
const routes = require("./routes");
const {connectToDatabase} = require('./database/connect');
const app = express();
var cors = require('cors')
const port = 8081;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + 'public'));

connectToDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});