import { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

function VendasList() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/listarVendas')
      .then((resp) => resp.json())
      .then((data) => {
        setVendas(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Lista de Vendas</h1>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" style={styles.table}>
        <thead>
          <tr>
            <th>Data da Venda</th>
            <th>Produto</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((item, index) => (
            <tr key={index}>
              <td>{item.data_venda}</td>
              <td>{item.produto}</td>
              <td>{item.cliente}</td>
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

export default VendasList;
