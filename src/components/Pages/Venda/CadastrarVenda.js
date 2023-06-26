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
        <Form className="col-sm-8">
            <Form.Group class="row g-3" controlId="produto">
                <div class="col-md-6"controlId="produto"> 
                    <Form.Label>Produto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome do produto"
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                    />
                </div>

                <div class="col-md-6" controlId="cliente">
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome do cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                    />
                </div>
            </Form.Group>

            <div style={{ marginTop: '40px'}}>
                <Button type="submit" class="btn btn-primary" variant="primary" onClick={cadastrarVenda} style={{ marginRight: '10px'}}>Cadastrar</Button>
                <Button type="button" class="btn btn-primary" href="/vendas">Voltar</Button>
            </div>
        </Form>
    );
};

export default CadastroVenda;
