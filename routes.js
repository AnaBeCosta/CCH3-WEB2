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

//LISTAR TODOS PRODUTO{S}
route.get("/listarProdutos", controller.getProdutos);

//CADASTRAR PESSOA
route.post("/cadastrarPessoa", controller.postPessoa);

//LISTAR PESSOA POR ID
route.get("/listarPessoa", controller.getPessoa);

//LISTAR TODAS PESSOA{S}
route.get("/listarPessoas", controller.getPessoas);

//CADASTRAR VENDA
route.post("/cadastrarVenda", controller.postVenda);

//LISTAR VENDA POR ID
route.get("/listarVenda", controller.getVenda);

//LISTAR TODAS VENDA{S}
route.get("/listarVendas", controller.getVendas);