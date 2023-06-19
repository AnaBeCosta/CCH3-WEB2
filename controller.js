const Produto =  require("./models/produto");
const Pessoa =  require("./models/pessoa");
const Venda =  require("./models/venda");

module.exports = {
  //MENU
  async getMenu (req, res){
    try{
      res.send('Exemplo de rota GET');
    }catch (error) {
      res.status(500).json({ error: 'Erro.' });
    }
  },

  //CADASTRAR PRODUTO
  async postProduto (req, res){
    try{
      const { nome, categoria, descricao, quantidade } = req.body;
      const produto = new Produto({ nome, categoria, descricao, quantidade });
      await produto.save().then(produto);
      res.status(200).json({"data": {"status": "success", produto}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao cadastrar produto.' });
    }
  },

  //LISTAR PRODUTO
  async getProduto (req, res){
    try{
      const { _id} = req.body;
      const produto = await Produto.findOne({_id: _id});
      res.status(200).json({"data": {"status": "success", produto}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar produto.' });
    }
  },

  //LISTAR PRODUTO{S}
  async getProdutos (req, res){
    try{
      const produto = await Produto.find();
      res.status(200).json({"data": {"status": "success", produto}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar produtos.' });
    }
  },

  //CADASTRAR PESSOA
  async postPessoa (req, res){
    try{
      const { nome, cpf, cep, logradouro, numero } = req.body;
      const pessoa = new Pessoa({ nome, cpf, cep, logradouro, numero });
      await pessoa.save().then(pessoa);
      res.status(200).json({"data": {"status": "success", pessoa}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao cadastrar pessoa.' });
    }
  },

  /*
  //LISTAR PESSOA/PRODUTO/VENDA
  async getProcura(req, res){
    try{
      const { _id} = req.body;
      
      const pessoa = await Pessoa.findOne({_id: _id});
      res.status(200).json({"data": {"status": "success", pessoa}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar pessoa.' });
    }
  },
  */

  //LISTAR PESSOA
  async getPessoa (req, res){
    try{
      const { _id } = req.body;
      const pessoa = await Pessoa.findOne({_id: _id});
      res.status(200).json({"data": {"status": "success", pessoa}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar pessoas.' });
    }
  },

  //LISTAR PESSOA{S}
  async getPessoas (req, res){
    try{
      const pessoa = await Pessoa.find();
      res.status(200).json({"data": {"status": "success", pessoa}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar pessoas.' });
    }
  },

  //CADASTRAR VENDA
  async postVenda (req, res){

    const data_venda = new Date();

    try{
      const { produto, cliente } = req.body;
      const venda = new Venda({ data_venda, produto, cliente });
      await venda.save().then(venda);
      res.status(200).json({"data": {"status": "success", venda}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao cadastrar venda.' });
    }
  },

  //LISTAR VENDA
  async getVenda (req, res){
    try{
      const { _id} = req.body;
      const venda = await Venda.findOne({_id: _id});
      res.status(200).json({"data": {"status": "success", venda}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar produto.' });
    }
  },

  //LISTAR VENDA{S}
  async getVendas (req, res){
    try{
      const venda = await Venda.find();
      res.status(200).json({"data": {"status": "success", venda}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar vendas.' });
    }
  }
}  
