import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CadastroVenda = ({ onVendaCadastrada }) => {
    const [produto, setProduto] = useState('');
    const [cliente, setCliente] = useState('');

    function onVendaCadastrada(venda) {
        fetch('http://localhost:8081/cadastrarVenda', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(venda)
        }).then((resp) => resp.json()).catch(err => console.log(err))
    }

    const cadastrarVenda = () => {
        const novaVenda = {
            produto: produto,
            cliente: cliente
        };

        onVendaCadastrada(novaVenda);

        setCliente('');
        setProduto('');
    };

    return (
        <Form>
            <Form.Group controlId="produto">
                <Form.Label>Produto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="cliente">
                <Form.Label>Cliente</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={cadastrarVenda}>
                Cadastrar
            </Button>
        </Form>
    );
};

export default CadastroVenda;
