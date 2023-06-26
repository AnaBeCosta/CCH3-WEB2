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
        <Form className="col-sm-8 card" style={{ backgroundColor: "white", border: '20px solid white'}}>
            <Form.Group class="row g-3">
                <div class="col-md-6" controlId="nomeProduto">
                    <Form.Label>Nome do produto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome do produto"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div class="col-md-6" controlId="categoriaProduto">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite a categoria do produto"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </div>

                <div class="col-md-6" controlId="descricaoProduto">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Digite a descrição do produto"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <div class="col-md-4" controlId="quantidadeProduto">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Digite a quantidade do produto"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </div>
            </Form.Group>

            <div style={{ marginTop: '40px'}}>
                <Button type="submit" class="btn btn-primary " variant="primary" onClick={cadastrarProduto} style={{ marginRight: '10px'}}>Cadastrar</Button>
                <Button type="button" class="btn btn-primary" href="/">Voltar</Button>
            </div>

        </Form>
    );
};

export default CadastroProduto;
