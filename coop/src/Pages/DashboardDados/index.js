import React from "react";
import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Container, Section } from "./styles";

const DashboardDados = () => {
  const [form, setForm] = React.useState({
    nome_Ong: "ONG Ação Vida",
    cnpj: "00.806.666/0001-31",
    email: "ongacaovida@gmail.com",
    whatapps: "(81) 9 9999-9999",
    sobre: "Ong destinada a ajuda de pessoas que m",
    area_atuacao: "Geral",
    facebook: "https://www.facebook.com/ongacaovida",
    instagram: "https://www.instagram.com/ongacaovida",

    logradouro: "Rua São Pedro",
    numero: "582",
    complemento: "Próximo a loja de seu Zé",
    cep: "49089-173",
    estado: "SE",
    cidade: "Aracaju",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />
        <Section>
          <form>
            <p className="font-paragraph">Dados da ONG</p>

            <div className="box">
              <label className="color-readonly">
                Nome da ONG*
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
                E-mail*
                <input
                  type="email"
                  className="color-input"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Whatsapp*
                <input
                  type="text"
                  value={form.whatapps}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="box">
              <label>
                Sobre*
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
                Facebook*
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
                Logradouro*
                <input
                  type="text"
                  value={form.logradouro}
                  onChange={handleChange}
                />
              </label>
              <label>
                Número*
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
                CEP*
                <input type="text" value={form.cep} onChange={handleChange} />
              </label>
            </div>

            <div className="box">
              <label>
                Estado*
                <input
                  type="text"
                  value={form.estado}
                  onChange={handleChange}
                />
              </label>
              <label>
                Cidade*
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
