import ProdutosList from "../Pages/Produto/ProdutosList";
import { Link } from "react-router-dom";

function Produtos() {
    return(
        <div>
            <br></br>
            <button> <Link to="/cadastrarProduto">Cadastrar produto</Link></button>
             <ProdutosList />
        </div>
    )
}

export default Produtos;