import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Container, Section } from "./styles";

import { useAuth } from "../../hooks/auth";

import api from "../../services/api";

const DashboardDados = () => {
  const { id } = useAuth();

  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCidade, setSelectedCidade] = useState("0");

  const [DadosOng, SetDadosOng] = React.useState({
    nome_ong: "",
    cnpj_ong: "",
    email: "",
    whatsapp_ong: "",
    senha: "",
    sobre_ong: "",
    area_atuacao_ong: "",
    facebook_ong: "",
    instagram_ong: "",

    logradouro_local_ong: "",
    numero_local_ong: "",
    complemento_local_ong: "",
    cep_local_ong: "",
    estado: "",
    cidade: "",
  });

  

  const handleChange = (event) => {
    SetDadosOng({ ...DadosOng, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.post(`/ongs/altera-dados-ong/${id}`, DadosOng).then(
      (response) => {
        if (response.status == 200) {
          alert("Alteração feita com sucesso!");
          event.target.reset();
        }
        console.log(response);
      },
      [id]
    );
  };

  useEffect(() => {
    api
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const estados = response.data.map((uf) => uf.sigla);

        setUfs(estados);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }

    api
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cidades = response.data.map((cidade) => cidade.nome);

        setCidades(cidades);
      });
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCidade(event) {
    const cidade = event.target.value;

    setSelectedCidade(cidade);
  }

  useEffect(() => {
    api.get(`/ongs/listaOng/${id}`, DadosOng).then((response) => {
      SetDadosOng(response.data);
    });
  }, [id]);

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />
        <Section>
          <form onSubmit={handleSubmit}>
            <p className="font-paragraph">Dados da ONG</p>

            <div className="box">
              <label className="color-readonly">
                Nome da ONG
                <input
                  type="text"
                  className="color-readonly"
                  name="nome_ong"
                  value={DadosOng.nome_ong}
                  readOnly
                />
              </label>
              <label className="color-readonly">
                CNPJ
                <input
                  type="text"
                  className="color-readonly"
                  name="cnpj_ong"
                  value={DadosOng.cnpj_ong}
                  readOnly
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  E-mail<span className="required">*</span>
                </span>
                <input
                  type="email"
                  className="color-input"
                  name="email"
                  value={DadosOng.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>
                  Whatsapp<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="whatsapp_ong"
                  value={DadosOng.whatsapp_ong}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Senha<span className="required">*</span>
                </span>
                <input
                  type="password"
                  className="color-input"
                  name="senha"
                  value={DadosOng.senha}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>
                  Confirmação da Senha<span className="required">*</span>
                </span>
                <input
                  type="password"
                  name="senha"
                  value={DadosOng.senha}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Sobre<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="sobre_ong"
                  value={DadosOng.sobre_ong}
                  onChange={handleChange}
                />
              </label>
              <label>
                Área de atuação
                <input
                  type="text"
                  name="area_atuacao_ong"
                  value={DadosOng.area_atuacao_ong}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Facebook<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="facebook_ong"
                  value={DadosOng.facebook_ong}
                  onChange={handleChange}
                />
              </label>
              <label>
                Instagram
                <input
                  type="text"
                  name="instagram_ong"
                  value={DadosOng.instagram_ong}
                  onChange={handleChange}
                />
              </label>
            </div>

            <p className="font-paragraph">Endereço da ONG</p>

            <div className="box">
              <label>
                <span>
                  Logradouro<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="logradouro_local_ong"
                  value={DadosOng.logradouro_local_ong}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>
                  Número<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="numero_local_ong"
                  value={DadosOng.numero_local_ong}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                Complemento
                <input
                  type="text"
                  name="complemento_local_ong"
                  value={DadosOng.complemento_local_ong}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>
                  CEP<span className="required">*</span>
                </span>
                <input
                  type="text"
                  name="cep_local_ong"
                  value={DadosOng.cep_local_ong}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>
                  Estado<span className="required">*</span>
                </span>
                <select
                  name="estado"
                  id="estado"
                  value={selectedUf.estado}
                  onChange={handleSelectUf}
                >
                  <option value="0">Selecione uma UF</option>
                  {ufs.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>
                  Cidade<span className="required">*</span>
                </span>
                <select
                  name="cidade"
                  id="cidade"
                  value={selectedCidade}
                  onChange={handleSelectCidade}
                >
                  <option value="0">Selecione uma Cidade</option>
                  {cidades.map((cidade) => (
                    <option key={cidade} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="box-button">
              <Button 
                className="button-size"
                background="var(--verde)"
                backgroundHover="var(--roxo)"
                type="submit"
              >
                Atualizar
              </Button>
              <Button
                className="button-size button-color-cancel"
                background="var(--cinza)"
                backgroundHover="var(--cinza-claro)"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardDados;
