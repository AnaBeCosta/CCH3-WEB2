import { Button} from 'react-bootstrap';

function Menu() {
  return (
    <>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginTop: '20px', marginBottom: '50px', gap: '15px' }}>
      <Button type="button" className="btn btn-secondary mx" href="/">  Produtos </Button>
      <Button type="button" className="btn btn-secondary mx" href="/pessoas"> Pessoas </Button>
      <Button type="button" className="btn btn-secondary mx" href="/vendas"> Vendas </Button>
    </div>
    </>
  );
}

export default Menu; 