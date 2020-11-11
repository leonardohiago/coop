import React from "react";
import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Container, Section } from "./styles";

import api from '../../services/api';

const DashboardDados = () => {
  const [form, setForm] = React.useState({
    id: "1",
    nome_Ong: "ONG Ação Vida",
    cnpj: "00.806.666/0001-31",
    email: "ongacaovida@gmail.com",
    whatsapp: "(81) 9 9999-9999",
    senha: "loremipsum",
    sobre: "Ong destinada a ajuda de pessoas que m",
    area_atuacao: "Geral",
    facebook: "https://www.facebook.com/ongacaovida",
    instagram: "https://www.instagram.com/ongacaovida",

    logradouro: 'Santo Amaro',
    numero: '66666',
    complemento: 'Casa',
    cep: '65656-454',
    estado: 'SP',
    cidade: 'SP',
  });

  const handleChange = (event) =>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = async event => {
    event.preventDefault();

    await api.put('/ongs/edita', form)
      .then(response => {
      console.log(response.data);
    });
  }

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
                  value={form.nome_Ong}
                  onChange={handleChange}
                  readOnly
                />
              </label>
              <label className="color-readonly">
                CNPJ
                <input
                  type="text"
                  className="color-readonly"
                  value={form.cnpj}
                  onChange={handleChange}
                  readOnly
                />
              </label>
            </div>

            <div className="box">
              <label>
              <span>E-mail<span className="required">*</span></span>
                <input
                  type="email"
                  className="color-input"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label>
              <span>Whatsapp<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.whatsapp}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>Senha<span className="required">*</span></span>
                <input
                  type="password"
                  className="color-input"
                  value={form.senha}
                  onChange={handleChange}
                />
              </label>
              <label>
                <span>Confirmação da Senha<span className="required">*</span></span>
                <input
                  type="password"
                  value={form.senha}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
              <span>Sobre<span className="required">*</span></span>
                <input type="text" value={form.sobre} onChange={handleChange} />
              </label>
              <label>
                Área de atuação
                <input
                  type="text"
                  value={form.area_atuacao}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                <span>Facebook<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.facebook}
                  onChange={handleChange}
                />
              </label>
              <label>
                Instagram
                <input
                  type="text"
                  value={form.instagram}
                  onChange={handleChange}
                />
              </label>
            </div>

            <p className="font-paragraph">Endereço da ONG</p>

            <div className="box">
              <label>
              <span>Logradouro<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.logradouro}
                  onChange={handleChange}
                />
              </label>
              <label>
              <span>Número<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.numero}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                Complemento
                <input
                  type="text"
                  value={form.complemento}
                  onChange={handleChange}
                />
              </label>
              <label>
              <span>CEP<span className="required">*</span></span>
                <input type="text" value={form.cep} onChange={handleChange} />
              </label>
            </div>

            <div className="box">
              <label>
              <span>Estado<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.estado}
                  onChange={handleChange}
                />
              </label>
              <label>
              <span>Cidade<span className="required">*</span></span>
                <input
                  type="text"
                  value={form.cidade}
                  onChange={handleChange}
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
