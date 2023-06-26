import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Form className="col-sm-8">
            <Form.Group class="row g-3">
                <div class="col-md-6" controlId="nomePessoa">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div class="col-md-6" controlId="cpf">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}/>
                </div>

                <div class="col-md-3" controlId="cep">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}/>
                </div>

                <div class="col-md-5" controlId="logradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o logradouro"
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}/>
                </div>

                <div div class="col-md-4" controlId="numero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o número"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}/>
                </div>
            </Form.Group>
            
            <div style={{ marginTop: '40px'}}>
                <Button type="submit" class="btn btn-primary" variant="primary" onClick={cadastrarPessoa} style={{ marginRight: '10px'}}>Cadastrar</Button>
                <Button type="button" class="btn btn-primary" href="/pessoas">Voltar</Button>
            </div>
        </Form>
    );
};

export default CadastroPessoa;
