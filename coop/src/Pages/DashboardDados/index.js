import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import { useAuth } from "../../hooks/auth";

import api from "../../services/api";

import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import Input from '../../Components/Input';
import InputMask from '../../Components/InputMask';
import Select from '../../Components/Select';
import { Container, Section, Form } from "./styles";

const DashboardDados = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const { id } = useAuth();

  const [optionsUfs, setOptionsUfs] = useState([]);
  const [optionsCidades, setOptionsCidades] = useState([]);

  const [selectedUf, setSelectedUf] = useState(0);
  const [selectedCidade, setSelectedCidade] = useState("0");

  const [atualizando, setAtualizando] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setAtualizando(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome_ong: Yup.string().required('Informe o nome da ONG').min(3, 'Nome deve conter pelo menos 3 caracteres.'),
        cnpj_ong: Yup.string().required('Informe o CNPJ'),
        email: Yup.string().email("Insira um e-mail válido.").required(),
        whatsapp_ong: Yup.string()
          .required('Informe o número do WhatsApp')
          .matches(/\(\d{2}\) \d{5}-\d{4}/, 'Informe um número de WhatsApp válido.'),
        sobre_ong: Yup.string().required('Preencha o campo "Sobre"'),
        facebook_ong: Yup.string().required('Informe a página do Facebook'),
        logradouro_local_ong: Yup.string().required('Informe o logradouro'),
        numero_local_ong: Yup.string().required('Informe o número do endereço'),
        cep_local_ong: Yup.string()
          .required('Informe o CEP')
          .matches(/\d{5}-\d{3}/, 'Informe um número CEP válido.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/ongs/altera-dados-ong/${id}`, {
        nome_ong: data.nome_ong,
        cnpj_ong: data.cnpj_ong,
        email: data.email,
        sobre_ong: data.sobre_ong,
        area_atuacao_ong: data.area_atuacao_ong,
        facebook_ong: data.facebook_ong,
        instagram_ong: data.instagram_ong,
        whatsapp_ong: data.whatsapp_ong,
        logradouro_local_ong: data.logradouro_local_ong,
        numero_local_ong: data.numero_local_ong,
        complemento_local_ong: data.complemento_local_ong,
        cep_local_ong: data.cep_local_ong,
        cidade: selectedCidade,
        estado: selectedUf,
      }).then(
        (response) => {
          if (response.status === 200) {
            setAtualizando(false);

            addToast({
              type: 'success',
              title: 'Sucesso',
              description: 'Dados atualizados com sucesso!',
            });
          }
        }
      ).catch(() => {
        setAtualizando(false);
        
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível atualizar os dados.',
        });
      });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;

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
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cidades = response.data.map((cidade) => cidade.nome);

        setOptionsCidades(cidades.map(cidade => {
          return {value: cidade, label: cidade}
        }));
      });
  }, [selectedUf]);

  const resetDadosForm = useCallback(() => {
    api.get(`/ongs/ong/${id}`).then((response) => {
      const ong = response.data;
      
      formRef.current.setData({
        whatsapp_ong: ong.whatsapp_ong,
        nome_ong: ong.nome_ong,
        cnpj_ong: ong.cnpj_ong,
        email: ong.email,
        sobre_ong: ong.sobre_ong,
        area_atuacao_ong: ong.area_atuacao_ong,
        facebook_ong: ong.facebook_ong,
        instagram_ong: ong.instagram_ong,
        logradouro_local_ong: ong.logradouro_local_ong,
        numero_local_ong: ong.numero_local_ong,
        complemento_local_ong: ong.complemento_local_ong,
        cep_local_ong: ong.cep_local_ong,
      });

      setSelectedUf(ong.estado);
      setSelectedCidade(ong.cidade);
    });
  }, [id])

  useEffect(() => {
    resetDadosForm();
  }, [id, resetDadosForm]);

  const handleChangeUF = (selected) => {
    setSelectedUf(selected.value);
    setSelectedCidade('Selecione');
  }

  const handleChangeCidade = (selected) => {
    setSelectedCidade(selected.value);
  }

  return (
    <>
      <Header />

      <Container>
        <MenuDashboard />

        <Section>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <p className="font-paragraph">Dados da ONG</p>

            <div className="box">
              <label>
                <span>
                  Nome da ONG<span className="required">*</span>
                </span>
                <Input
                  name="nome_ong"
                />
              </label>
              <label>
                <span>
                  CNPJ<span className="required">*</span>
                </span>
                <InputMask
                  name="cnpj_ong"
                  mask="99.999.999/9999-99"
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  E-mail<span className="required">*</span>
                </span>
                <Input
                  name="email"
                />
              </label>
              <label>
                <span>
                  Whatsapp<span className="required">*</span>
                </span>
                  <InputMask
                    name="whatsapp_ong"
                    mask="(99) 99999-9999"
                  />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Sobre<span className="required">*</span>
                </span>
                <Input
                  name="sobre_ong"
                />
              </label>
              <label>
                Área de atuação
                <Input
                  name="area_atuacao_ong"
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Facebook<span className="required">*</span>
                </span>
                <Input
                  name="facebook_ong"
                />
              </label>
              <label>
                Instagram
                <Input
                  name="instagram_ong"
                />
              </label>
            </div>

            <p className="font-paragraph">Endereço da ONG</p>

            <div className="box">
              <label>
                <span>
                  Logradouro<span className="required">*</span>
                </span>
                <Input
                  name="logradouro_local_ong"
                />
              </label>
              <label>
                <span>
                  Número<span className="required">*</span>
                </span>
                <Input
                  name="numero_local_ong"
                />
              </label>
            </div>

            <div className="box">
              <label>
                Complemento
                <Input
                  name="complemento_local_ong"
                />
              </label>
              <label>
                <span>
                  CEP<span className="required">*</span>
                </span>
                <InputMask
                  name="cep_local_ong"
                  mask="99999-999"
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Estado<span className="required">*</span>
                </span>
                <Select 
                  name="estado"
                  options={optionsUfs}
                  placeholder="Selecione a UF"
                  value={{label : selectedUf}}
                  onChange={(selected) => handleChangeUF(selected)}
                />
              </label>

              <label>
                <span>
                  Cidade<span className="required">*</span>
                </span>
                <Select
                  name="cidade"
                  options={optionsCidades}
                  placeholder="Primeiro selecione a UF"
                  value={{label : selectedCidade}}
                  onChange={(selected) => handleChangeCidade(selected)}
                />
              </label>
            </div>

            <div className="box-button">
              <Button 
                className="button-size"
                background="var(--verde)"
                backgroundHover="var(--roxo)"
                type="submit"
              >
                {atualizando ? 'Atualizando...' : 'Atualizar'}
              </Button>
              <Button
                className="button-size button-color-cancel"
                background="var(--cinza)"
                backgroundHover="var(--cinza-escuro)"
                colorText="var(--vermelho)"
                colorTextHover="var(--preto)"
                onClick={() =>  resetDadosForm()}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardDados;
