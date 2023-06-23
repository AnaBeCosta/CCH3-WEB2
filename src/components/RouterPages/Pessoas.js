import PessoasList from "../Pages/Pessoa/PessoaList";
import { Link } from "react-router-dom";

function Pessoas() {
    return(
        <div>
            <br></br>
            <button> <Link to="/cadastrarPessoa">Cadastrar pessoa</Link></button>
            <PessoasList />
        </div>
    )
}

export default Pessoas;