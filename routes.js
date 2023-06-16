const express = require('express');
const route = express.Router();
const controller = require("./controller");

module.exports = route;

//INICIAL
route.get("", controller.getMenu);

//CADASTRAR PRODUTO
route.post("/cadastrarProduto", controller.postProduto);

//LISTAR PRODUTO POR ID
route.get("/listarProduto", controller.getProduto);

//LISTAR TODOS PRODUTOs
route.get("/listarProdutos", controller.getProdutos);