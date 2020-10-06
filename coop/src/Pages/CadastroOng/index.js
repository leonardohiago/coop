import React, { useEffect, useState } from 'react';

import { Content, Input, Form, Subtitle, Field, FieldGroup, Title, SubmitButton, Select, Option, ItemsGrid } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Upload from '../../Components/Upload';
import FileList from '../../Components/FileList';

import axios from 'axios';

const CadastroOng = () => {

    const doacoes = [
        {
            src: '',
            nome: 'Dinheiro',
            id: 1,
        },
        {
            src: '',
            nome: 'Alimento',
            id: 2,
        },
        {
            src: '',
            nome: 'Ração',
            id: 3,
        },
        {
            src: '',
            nome: 'Eletrônicos',
            id: 4,
        },
        {
            src: '',
            nome: 'Roupa',
            id: 5,
        },
        {
            src: '',
            nome: 'Móveis',
            id: 6,

        },
        {
            src: '',
            nome: 'Mão de Obra',
            id: 7,
        },
        {
            src: '',
            nome: 'Material Escolar',
            id: 8,
        },
        {
            src: '',
            nome: 'Material de Limpeza',
            id: 9,
        },
        {
            src: '',
            nome: 'Material de Construção',
            id: 10,
        },
        {
            src: '',
            nome: 'Material de Higiene',
            id: 11,
        },
        {
            src: '',
            nome: 'Outro',
            id: 12,
        },
    ]

    const [form, setForm] = React.useState({
        nomeOng: '',
        CNPJ: '',
        emailOng: '',
        whatsappOng: '',
        sobre: '',
        areaAtuacao: '',
        facebook: '',
        instagram: '',

        logradouro: '',
        numero: '',
        componento: '',
        cep: '',
        estado: '',
        cidade: '',

        nomeCompleto: '',
        dataNascimento: '',
        emailCadastrante: '',
        whatsappCadastrante: '',
        trabalhaOng: '',
        funcao: '',
    });

    const [ufs, setUfs] = useState([]);
    const [cidades, setCidades] = useState([]);
    
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCidade, setSelectedCidade] = useState('0');

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const estados = response.data.map(uf => uf.sigla);

            setUfs(estados);
        })
    }, []);

    useEffect(() => {
        if (selectedUf === '0') {
            return
        }

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            const cidades = response.data.map(cidade => cidade.nome);

            setCidades(cidades);
        })
    } ,[selectedUf]);

    function handleSelectUf(event) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCidade(event) {
        const cidade = event.target.value;

        setSelectedCidade(cidade);
    }

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({...form, [id]: value});
    }

    return (
        <>
            <Header />

                <Form>

                <Title>Cadastro da ONG</Title>

                    <form>

                        <Subtitle>Dados da ONG</Subtitle>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="nomeOng">Nome da Ong</label>
                                <Input
                                    type="text"
                                    id="nomeOng"
                                    value={form.nomeOng}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                                <label htmlFor="cnpj">CNPJ</label>
                                <Input
                                    type="text"
                                    id="cnpj"
                                    value={form.cnpj}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                            <label htmlFor="emailOng">E-mail</label>
                                <Input
                                    type="email"
                                    id="emailOng"
                                    value={form.emailOng}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                            <label htmlFor="whatsappOng">Whatsapp</label>
                                <Input
                                    type="text"
                                    id="whatsappOng"
                                    value={form.whatsappOng}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>
                        
                        <FieldGroup>
                            <Field>
                                <label htmlFor="sobre">Sobre</label>
                                <Input
                                    type="text"
                                    id="sobre"
                                    value={form.sobre}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                                <label htmlFor="areaAtuacao">Área de Atuação</label>
                                <Input
                                    type="text"
                                    id="areaAtuacao"
                                    value={form.areaAtuacao}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="facebook">Facebook</label>
                                <Input
                                    type="text"
                                    id="facebook"
                                    value={form.facebook}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="instagram">Instagram</label>
                                <Input
                                    type="text"
                                    id="instagram"
                                    value={form.instagram}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>
                        
                        <Subtitle>Endereço da ONG</Subtitle>
                        
                        <FieldGroup>
                            <Field>
                                <label htmlFor="logradouro">Logradouro</label>
                                <Input
                                    type="text"
                                    id="logradouro"
                                    value={form.logradouro}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="numero">Número</label>
                                <Input
                                    type="text"
                                    id="numero"
                                    value={form.numero}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="complemento">Complemento</label>
                                <Input
                                    type="text"
                                    id="complemento"
                                    value={form.complemento}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="cep">CEP</label>
                                <Input
                                    type="text"
                                    id="cep"
                                    value={form.cep}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="estado">Estado</label>
                                <Select name="estado" id="estado" value={selectedUf} onChange={handleSelectUf}>
                                    <Option value="0">Selecione uma UF</Option>
                                    {ufs.map(uf => (
                                        <Option key={uf} value={uf}>{uf}</Option>
                                    ))}
                                </Select>
                            </Field>
                            <Field>
                                <label htmlFor="cidade">Cidade</label>
                                <Select name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                                    <Option value="0">Selecione uma Cidade</Option>
                                    {cidades.map(cidade => (
                                        <Option key={cidade} value={cidade}>{cidade}</Option>
                                    ))}
                                </Select>
                            </Field>
                        </FieldGroup>

                        <Subtitle>Itens de doação para ONG</Subtitle>

                        <FieldGroup>
                            <ItemsGrid>
                                {doacoes.map(({ id, nome, src }) => (
                                    <li key={id}>
                                        <img src={src}/>
                                        <span>{nome}</span>
                                    </li>
                                ))}
                            </ItemsGrid>
                        </FieldGroup>

                        <Subtitle>Upload de imagens da ONG</Subtitle>

                        <FieldGroup>
                            <Field>
                                <label>Anexe 5 imagens da ONG</label>
                                <Content>
                                    <Upload />
                                    <FileList />
                                </Content>
                            </Field>
                            
                        </FieldGroup>

                        <Subtitle>Dados do Cadastrante</Subtitle>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="nomeCompleto">Nome Completo</label>
                                <Input
                                    type="text"
                                    id="nomeCompleto"
                                    value={form.nomeCompleto}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="dataNascimento">Data de Nascimento</label>
                                <Input
                                    type="text"
                                    id="dataNascimento"
                                    value={form.dataNascimento}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="emailCadastrante">E-mail</label>
                                <Input
                                    type="email"
                                    id="emailCadastrante"
                                    value={form.emailCadastrante}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="whatsappCadastrante">Whatsapp</label>
                                <Input
                                    type="text"
                                    id="whatsappCadastrante"
                                    value={form.whatsappCadastrante}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="trabalhaOng">Trabalha na ONG?</label>
                                <Input
                                    type="text"
                                    id="trabalhaOng"
                                    value={form.trabalhaOng}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="funcao">Função</label>
                                <Input
                                    type="text"
                                    id="funcao"
                                    value={form.funcao}
                                    onChange={handleChange}
                                />
                            </Field>                          
                        </FieldGroup>

                        <SubmitButton>Confirmar</SubmitButton>

                    </form>

                </Form>

            <Footer />

        </>
    )
}

export default CadastroOng;