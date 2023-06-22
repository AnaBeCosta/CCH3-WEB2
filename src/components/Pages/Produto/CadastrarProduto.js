import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CadastroProduto = ({ onProdutoCadastrado }) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    function onProdutoCadastrado(produto) {
        fetch('http://localhost:8081/cadastrarProduto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        }).then((resp) => resp.json()).catch(err => console.log(err))
    }

    const cadastrarProduto = () => {
        const novoProduto = {
            nome: nome,
            categoria: categoria,
            descricao: descricao,
            quantidade: quantidade,
        };

        onProdutoCadastrado(novoProduto);

        setNome('');
        setCategoria('');
        setDescricao('');
        setQuantidade('');
    };

    return (
        <Form>
            <Form.Group controlId="nomeProduto">
                <Form.Label>Nome do produto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="categoriaProduto">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite a categoria do produto"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="descricaoProduto">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Digite a descrição do produto"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="quantidadeProduto">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Digite a quantidade do produto"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={cadastrarProduto}>
                Cadastrar
            </Button>
        </Form>
    );
};

export default CadastroProduto;
