import VendasList from "../Pages/Venda/VendasList";
import { Link } from "react-router-dom";

function Vendas() {
    return(
        <div>
            <br></br>
            <button> <Link to="/cadastrarVenda">Cadastrar venda</Link></button>
            <VendasList />
        </div>
    )
}

export default Vendas;