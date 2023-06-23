import { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

function PessoasList() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/listarPessoas')
      .then((resp) => resp.json())
      .then((data) => setPessoas(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Lista de Pessoas</h1>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" style={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.numero}</td>
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

export default PessoasList;
