import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <button> <Link to="/"> Produtos</Link> </button>
      <button> <Link to="/pessoas"> Pessoas</Link></button>
      <button> <Link to="/vendas"> Vendas</Link></button>
    </>
  );
}
export default Menu; 