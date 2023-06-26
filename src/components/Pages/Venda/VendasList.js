import { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';

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
        <Col style={{ textAlign: 'right', alignSelf: 'flex-end', marginBottom: '10px' }}>
          <Button type="button" className="btn btn-dark btn-sm" href="/cadastrarVenda" > Cadastrar Venda </Button>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Data da Venda</th>
            <th>Produto</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((item, index) => {
            const dateString = item.data_venda;
            const data = new Date(dateString);
            const ano = data.getFullYear();
            const mes = (data.getMonth() + 1).toString().padStart(2, "0");
            const dia = data.getDate().toString().padStart(2, "0");

            const dataFormatada = `${dia}/${mes}/${ano}`;
            return (<tr key={index}>
              <td>{dataFormatada}</td>
              <td>{item.produto}</td>
              <td>{item.cliente}</td>
            </tr>
            );
          })}
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
