import React, { useEffect, useState, useRef } from "react";
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import {
  Form,
  Subtitle,
  Field,
  FieldGroup,
  Title,
  FieldButtons,
  Radio,
} from "./styles";

import { useToast } from '../../hooks/toast';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from '../../Components/Input';
import InputMask from '../../Components/InputMask';
import Select from '../../Components/Select';
import Button from "../../Components/Button";

import api from "../../services/api";

const CadastroOng = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef(null);
  const [optionsUfs, setOptionsUfs] = useState([]);
  const [optionsCidades, setOptionsCidades] = useState([]);

  const [selectedUf, setSelectedUf] = useState();
  const [selectedCidade, setSelectedCidade] = useState();

  const [trabalhaOng, setTrabalhaOng] = useState(undefined);

  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    api
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
      .then((response) => {
        const estados = response.data.map((uf) => uf.sigla);

        setOptionsUfs(estados.map(uf => {
          return {value: uf, label: uf}
        }));
      });
  }, []);

  useEffect(() => {
    api
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
      .then((response) => {
        const estados = response.data.map((uf) => uf.sigla);

        setOptionsUfs(estados.map(uf => {
          return {value: uf, label: uf}
        }));
      });
  }, []);

  useEffect(() => {
    if(selectedUf) {
      api
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
        )
        .then((response) => {
          const cidades = response.data.map((cidade) => cidade.nome);
  
          setOptionsCidades(cidades.map(cidade => {
            return {value: cidade, label: cidade}
          }));
        });
    }
  }, [selectedUf]);

  const handleChangeUF = (selected) => {
    setSelectedUf(selected.value);
    setSelectedCidade('Selecione');
  }

  const handleChangeCidade = (selected) => {
    setSelectedCidade(selected.value);
  }

  const handleSetEnderecoViaCEP = async (event) => {
    const cep = event.target.value;

    if(event.target.value.indexOf('_') === -1 && event.target.value.length === 9) {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json`);

      const dados = response.data;

      setSelectedUf(dados.uf);
      setSelectedCidade(dados.localidade);
      
      formRef.current.setFieldValue('logradouro_local_ong', dados.logradouro);
      formRef.current.getFieldRef('numero_local_ong').focus();
    }
  }

  const handleSubmit = async (data, { reset }) => {
    try {
      data.estado = selectedUf;
      data.cidade = selectedCidade;
      data.trabalha_ong = trabalhaOng;

      setEnviando(true);

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome_ong: Yup.string().required('Informe o nome da ONG').min(3, 'Nome deve conter pelo menos 3 caracteres.'),
        cnpj_ong: Yup.string().required('Informe o CNPJ'),
        email: Yup.string().email("Insira um e-mail válido.").required('Informe o e-mail da ONG'),
        whatsapp_ong: Yup.string()
          .required('Informe o número do WhatsApp')
          .matches(/\(\d{2}\) \d{5}-\d{4}/, 'Informe um número de WhatsApp válido.'),
        senha: Yup.string().required('Informe a senha').min(6, 'Senha deve conter pelo menos 6 caracteres.'),
        confirmSenhaOng: Yup.string()
          .when('senha', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          })
          .oneOf([Yup.ref('senha'), null], 'Senhas não são inguais.'),
        sobre_ong: Yup.string().required('Preencha o campo "Sobre"'),
        area_atuacao_ong: Yup.string().required('Preencha o campo "Área de atuação"'),
        facebook_ong: Yup.string().required('Informe a página do Facebook'),
        logradouro_local_ong: Yup.string().required('Informe o logradouro'),
        numero_local_ong: Yup.string().required('Informe o número do endereço'),
        estado: Yup.string().required('Informe o estado'),
        cidade: Yup.string().required('Informe a cidade'),
        cep_local_ong: Yup.string()
          .required('Informe o CEP')
          .matches(/\d{5}-\d{3}/, 'Informe um número CEP válido.'),
        nome_completo_responsavel: Yup.string().required('Informe o nome do responsável').min(3, 'Nome deve conter pelo menos 3 caracteres.'),
        email_responsavel: Yup.string().email("Insira um e-mail válido para o responsável.").required('Informe o e-mail do responsável'),
        whatsapp_responsavel: Yup.string()
          .required('Informe o número do WhatsApp')
          .matches(/\(\d{2}\) \d{5}-\d{4}/, 'Informe um número de WhatsApp válido.'),
        trabalha_ong: Yup.bool().required("Informe se trabalha na ONG"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      let enderecoApi = data.logradouro_local_ong.replaceAll(' ', '+');
      enderecoApi += `,${data.numero_local_ong},+${data.cidade},${data.estado}`;
        
      const responseGMaps = await api.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${enderecoApi}&key=${process.env.REACT_APP_KEY_GOOGLE_MAPS}`);
      
      const geo = responseGMaps.data.results[0].geometry.location;

      data.latitude = geo.lat;
      data.longitude = geo.lng;
      data.itens_doacao_requeridos = '';

      await api.post(`/usuarios`, data).then(
        (response) => {
            setEnviando(false);

            addToast({
              type: 'success',
              title: 'Sucesso',
              description: 'ONG cadastrada com sucesso!',
            });

            reset();
            history.push('/login');
        }
      ).catch(() => {
        setEnviando(false);
        
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi cadastrar a ONG.',
        });
      });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;

          setEnviando(false);

          addToast({
            type: 'error',
            title: 'Erro',
            description: error.message,
          });
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Title>Cadastro da ONG</Title>

        <form>
          <Subtitle>Dados da ONG</Subtitle>

          <FieldGroup>
            <Field>
              <label htmlFor="nomeOng">
                Nome da Ong<span>*</span>
              </label>
              <Input
                name="nome_ong"
              />
            </Field>

            <Field>
              <label htmlFor="cnpj">CNPJ</label>
              <InputMask
                name="cnpj_ong"
                mask="99.999.999/9999-99"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="emailOng">
                E-mail<span>*</span>
              </label>
              <Input
                type="email"
                name="email"
              />
            </Field>

            <Field>
              <label htmlFor="whatsappOng">
                Whatsapp<span>*</span>
              </label>
              <InputMask
                name="whatsapp_ong"
                mask="(99) 99999-9999"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="senhaOng">
                Senha<span>*</span>
              </label>
              <Input
                type="password"
                name="senha"
              />
            </Field>

            <Field>
              <label htmlFor="confirmSenhaOng">
                Confirmação da Senha<span>*</span>
              </label>
              <Input
                type="password"
                name="confirmSenhaOng"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="sobre">
                Sobre<span>*</span>
              </label>
              <Input
                type="text"
                name="sobre_ong"
              />
            </Field>

            <Field>
              <label htmlFor="areaAtuacao">
                Área de Atuação<span>*</span>
              </label>
              <Input
                type="text"
                name="area_atuacao_ong"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="facebook">
                Facebook<span>*</span>
              </label>
              <Input
                type="text"
                name="facebook_ong"
              />
            </Field>
            <Field>
              <label htmlFor="instagram">Instagram</label>
              <Input
                type="text"
                name="instagram_ong"
              />
            </Field>
          </FieldGroup>

          <Subtitle>Endereço da ONG</Subtitle>

          <FieldGroup>
            <Field>
              <label htmlFor="cep">
                CEP<span>*</span>
              </label>
              <InputMask
                name="cep_local_ong"
                mask="99999-999"
                onChange={(event) => handleSetEnderecoViaCEP(event)}
              />
            </Field>
            <Field>
              <label htmlFor="logradouro">
                Logradouro<span>*</span>
              </label>
              <Input
                type="text"
                name="logradouro_local_ong"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="numero">
                Número<span>*</span>
              </label>
              <Input
                type="text"
                name="numero_local_ong"
              />
            </Field>
            <Field>
              <label htmlFor="complemento">Complemento</label>
              <Input
                type="text"
                name="complemento_local_ong"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="estado">
                Estado<span>*</span>
              </label>
              <Select 
                name="estado"
                options={optionsUfs}
                placeholder="Selecione a UF"
                value={selectedUf ? {label: selectedUf} : null}
                onChange={(selected) => handleChangeUF(selected)}
              />
            </Field>
            <Field>
              <label htmlFor="cidade">
                Cidade<span>*</span>
              </label>
              <Select
                name="cidade"
                options={optionsCidades}
                placeholder="Primeiro selecione a UF"
                value={selectedCidade ? {label : selectedCidade} : null}
                onChange={(selected) => handleChangeCidade(selected)}
              />
            </Field>
          </FieldGroup>

          <Subtitle>Dados do Cadastrante</Subtitle>

          <FieldGroup>
            <Field>
              <label htmlFor="nomeCompleto">
                Nome Completo<span>*</span>
              </label>
              <Input
                type="text"
                name="nome_completo_responsavel"
              />
            </Field>
            <Field>
              <label htmlFor="dataNascimento">
                Data de Nascimento<span>*</span>
              </label>
              <Input
                type="date"
                name="data_nascimento_responsavel"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="emailCadastrante">
                E-mail<span>*</span>
              </label>
              <Input
                type="email"
                name="email_responsavel"
              />
            </Field>
            <Field>
              <label htmlFor="whatsappCadastrante">Whatsapp</label>
              <InputMask
                name="whatsapp_responsavel"
                mask="(99) 99999-9999"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="trabalhaOng">
                Trabalha na ONG?<span>*</span>
              </label>

              <Radio>
                <label>
                  Sim
                  <input
                    type="radio"
                    name="trabalha_ong"
                    value="Sim"
                    onClick={() => setTrabalhaOng(true)}
                  />
                  <span></span>
                </label>
                <label>
                  Não
                  <input
                    type="radio"
                    name="trabalha_ong"
                    value="Não"
                    onClick={() => setTrabalhaOng(false)}
                  />
                  <span></span>
                </label>
              </Radio>
            </Field>
    
            {trabalhaOng && (
              <Field>
                <label htmlFor="funcao">Função</label>
                <Input
                  type="text"
                  name="funcao_responsavel"
                />
              </Field>
            )}
          </FieldGroup>

          <FieldButtons>
            <Button
              className="button-size"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
              type="submit"
            >
              {enviando ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            <Button
              className="button-size color-cancel"
              background="var(--cinza)"
              backgroundHover="var(--cinza-escuro)"
              colorText="var(--vermelho)"
              colorTextHover="var(--preto)"
              onClick={() => formRef.current.reset()}
            >
              Cancelar
            </Button>
          </FieldButtons>
        </form>
      </Form>

      <Footer />
    </>
  );
};

export default CadastroOng;
