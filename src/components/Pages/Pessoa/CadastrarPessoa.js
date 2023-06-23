import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CadastroPessoa = ({ onPessoaCadastrada }) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');

    function onPessoaCadastrada(pessoa) {
        fetch('http://localhost:8081/cadastrarPessoa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pessoa)
        }).then((resp) => resp.json()).catch(err => console.log(err))
    }

    const cadastrarPessoa = () => {
        const novaPessoa = {
            nome: nome,
            cpf: cpf,
            cep: cep,
            logradouro: logradouro,
            numero: numero
        };

        onPessoaCadastrada(novaPessoa);

        setNome('');
        setCpf('');
        setCep('');
        setLogradouro('');
        setNumero('');
    };

    return (
        <Form>
            <Form.Group controlId="nomePessoa">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="cep">
                <Form.Label>Cep</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="logradouro">
                <Form.Label>Logradouro</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o logradouro"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="numero">
                <Form.Label>Número</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={cadastrarPessoa}>
                Cadastrar
            </Button>
        </Form>
    );
};

export default CadastroPessoa;
