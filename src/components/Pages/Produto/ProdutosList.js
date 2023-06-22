import { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

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
    <Container>
      <Row>
        <Col>
          <h1>Lista de Produtos</h1>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" style={styles.table}>
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

  const styles = {
    table: {
      marginTop: 20,
    },
  };

export default ProdutosList;
