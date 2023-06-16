const Produto =  require("./models/produto");

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

  //LISTAR PRODUTOs
  async getProdutos (req, res){
    try{
      const produto = await Produto.find();
      res.status(200).json({"data": {"status": "success", produto}});
    }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar produtos.' });
    }
  }
}  
