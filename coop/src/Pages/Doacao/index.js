import React from "react";
import { Container, Section, Aside } from "./styles";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import logo from "../../assets/coop-logo.png";
import obrigado from "../../assets/obrigado-vertical.png";

const Doacao = () => {
  const [form, setForm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <Container>
      <Section>
        <form onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="logo" />
          <p className="p-1">Confirme sua Doação</p>

          <div>
            <label>
              Nome completo
              <input
                type="text"
                value={form.nome_completo}
                onChange={handleChange}
              />
            </label>

            <label>
              Whatsapp
              <input
                type="text"
                value={form.whatsapp}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <p className="p-2">O que deseja doar?</p>
          </div>

          <Checkbox></Checkbox>

          <div className="row-1">
            <label>
              Data de Entrega da Doação
              <input
                type="text"
                value={form.data_entrega}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="row-2">
            <Button
              className="button-size"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
            >
              Confirmar
            </Button>
            <Button
              className="button-size color-cancel"
              background="var(--cinza)"
              backgroundHover="var(--cinza-claro)"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Section>

      <Aside>
        <img className="logo-obrigado" src={obrigado} alt="obrigado" />
      </Aside>
    </Container>
  );
};

export default Doacao;
