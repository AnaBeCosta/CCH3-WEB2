import './App.css';
import Menu from './components/Layout/Menu'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Produtos from "./components/RouterPages/Produtos"
import Pessoas from "./components/RouterPages/Pessoas"
import Vendas from "./components/RouterPages/Vendas"
import CadastroProduto from './components/Pages/Produto/CadastrarProduto';
import CadastroPessoa from './components/Pages/Pessoa/CadastrarPessoa';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path ="/" element={<Produtos />}> </Route>
        <Route path='/pessoas' element={<Pessoas />}> </Route>
        <Route path='/vendas' element={<Vendas />}> </Route>
        <Route path='/cadastrarProduto' element={<CadastroProduto />}> </Route>
        <Route path='/cadastrarPessoa' element={<CadastroPessoa />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
