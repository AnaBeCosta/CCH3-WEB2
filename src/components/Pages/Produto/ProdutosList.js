import { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';

function ProdutosList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/listarProdutos')
      .then((resp) => resp.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container class="container-sm" >
      <Row>
        <Col>
          <h1>Lista de Produtos</h1>
        </Col>
        <Col style={{ textAlign: 'right', alignSelf: 'flex-end', marginBottom: '10px' }}>
          <Button type="button" className="btn btn-dark btn-sm" href="/cadastrarProduto" > Cadastrar Produto </Button>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.categoria}</td>
              <td>{item.descricao}</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProdutosList;
