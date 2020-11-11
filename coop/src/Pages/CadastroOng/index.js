import React, { useEffect, useState } from 'react';

import { Content, Input, Form, Subtitle, Field, FieldGroup, Title, SubmitButton, Select, Option, CancelButton, FieldButtons } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Upload from '../../Components/Upload';
import FileList from '../../Components/FileList';
import ItensDoacao from "../../Components/ItensDoacao";


import axios from 'axios';
import api from '../../services/api';

const CadastroOng = () => {

    const [form, setForm] = React.useState({
        nome_ong: '',
        cnpj_ong: '',
        email: '',
        whatsapp_ong: '',
        senha: '',
        confirmSenhaOng: '',
        sobre_ong: '',
        area_atuacao_ong: '',
        facebook_ong: '',
        instagram_ong: '',

        itens_doacao_requeridos: '',

        logradouro_local_ong: '',
        numero_local_ong: '',
        complemento_local_ong: '',
        cep_local_ong: '',
        estado: '',
        cidade_local_ong: '',

        nome_completo_responsavel: '',
        data_nascimento_responsavel: '',
        email_responsavel: '',
        whatsapp_responsavel: '',
        trabalha_ong: '',
        funcao_responsavel: '',
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

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    
      };

    const handleSubmit = async (event) =>{
        event.preventDefault();

        await api.post("/usuarios", form).then((response) =>{
            console.log(response.data);
        });
    };

    return (
        <>
            <Header />

                <Form onSubmit={handleSubmit}>

                <Title>Cadastro da ONG</Title>

                    <form>

                        <Subtitle>Dados da ONG</Subtitle>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="nomeOng">Nome da Ong<span>*</span></label>
                                <Input
                                    type="text"
                                    name="nome_ong"
                                    value={form.nome_ong}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                                <label htmlFor="cnpj">CNPJ</label>
                                <Input
                                    type="text"
                                    name="cnpj_ong"
                                    value={form.cnpj_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                            <label htmlFor="emailOng">E-mail<span>*</span></label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                            <label htmlFor="whatsappOng">Whatsapp<span>*</span></label>
                                <Input
                                    type="text"
                                    name="whatsapp_ong"
                                    value={form.whatsapp_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                            <label htmlFor="senhaOng">Senha<span>*</span></label>
                                <Input
                                    type="password"
                                    name="senha"
                                    value={form.senha}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                            <label htmlFor="confirmSenhaOng">Confirmação da Senha<span>*</span></label>
                                <Input
                                    type="password"
                                    name="confirmSenhaOng"
                                    value={form.confirmSenhaOng}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>
                        
                        <FieldGroup>
                            <Field>
                                <label htmlFor="sobre">Sobre<span>*</span></label>
                                <Input
                                    type="text"
                                    name="sobre_ong"
                                    value={form.sobre_ong}
                                    onChange={handleChange}
                                />
                            </Field>

                            <Field>
                                <label htmlFor="areaAtuacao">Área de Atuação<span>*</span></label>
                                <Input
                                    type="text"
                                    name="area_atuacao_ong"
                                    value={form.area_atuacao_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="facebook">Facebook<span>*</span></label>
                                <Input
                                    type="text"
                                    name="facebook_ong"
                                    value={form.facebook_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="instagram">Instagram</label>
                                <Input
                                    type="text"
                                    name="instagram_ong"
                                    value={form.instagram_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>
                        
                        <Subtitle>Endereço da ONG</Subtitle>
                        
                        <FieldGroup>
                            <Field>
                                <label htmlFor="logradouro">Logradouro<span>*</span></label>
                                <Input
                                    type="text"
                                    name="logradouro_local_ong"
                                    value={form.logradouro_local_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="numero">Número<span>*</span></label>
                                <Input
                                    type="text"
                                    name="numero_local_ong"
                                    value={form.numero_local_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="complemento">Complemento</label>
                                <Input
                                    type="text"
                                    name="complemento_local_ong"
                                    value={form.complemento_local_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="cep">CEP<span>*</span></label>
                                <Input
                                    type="text"
                                    name="cep_local_ong"
                                    value={form.cep_local_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="estado">Estado<span>*</span></label>
                                <Select name="estado" id="estado" value={selectedUf} onChange={handleSelectUf}>
                                    <Option value="0">Selecione uma UF</Option>
                                    {ufs.map(uf => (
                                        <Option key={uf} value={uf}>{uf}</Option>
                                    ))}
                                </Select>
                            </Field>
                            <Field>
                                <label htmlFor="cidade">Cidade<span>*</span></label>
                                <Select name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                                    <Option value="0">Selecione uma Cidade</Option>
                                    {cidades.map(cidade => (
                                        <Option key={cidade} value={cidade}>{cidade}</Option>
                                    ))}
                                </Select>
                            </Field>
                        </FieldGroup>

                        <Subtitle>Itens de doação para ONG</Subtitle>

                       <ItensDoacao />

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
                                <label htmlFor="nomeCompleto">Nome Completo<span>*</span></label>
                                <Input
                                    type="text"
                                    name="nome_completo_responsavel"
                                    value={form.nome_completo_responsavel}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="dataNascimento">Data de Nascimento<span>*</span></label>
                                <Input
                                    type="text"
                                    name="data_nascimento_responsavel"
                                    value={form.data_nascimento_responsavel}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="emailCadastrante">E-mail<span>*</span></label>
                                <Input
                                    type="email"
                                    name="email_responsavel"
                                    value={form.email_responsavel}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="whatsappCadastrante">Whatsapp</label>
                                <Input
                                    type="text"
                                    name="whatsapp_responsavel"
                                    value={form.whatsapp_responsavel}
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>

                        <FieldGroup>
                            <Field>
                                <label htmlFor="trabalhaOng">Trabalha na ONG?<span>*</span></label>
                                <Input
                                    type="text"
                                    name="trabalha_ong"
                                    value={form.trabalha_ong}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <label htmlFor="funcao">Função</label>
                                <Input
                                    type="text"
                                    name="funcao_responsavel"
                                    value={form.funcao_responsavel}
                                    onChange={handleChange}
                                />
                            </Field>                          
                        </FieldGroup>
                        
                        <FieldButtons>
                            <SubmitButton type="submit">Confirmar</SubmitButton>
                            <CancelButton>Cancelar</CancelButton>
                        </FieldButtons>

                    </form>

                </Form>

            <Footer />

        </>
    )
}

export default CadastroOng;