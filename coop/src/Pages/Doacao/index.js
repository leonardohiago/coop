import React from "react";
import { Container } from "./styles";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import logo from "../../assets/coop-logo.png";

const Doacao = () => {
  return (
    <Container>
      <section>
        <img src={logo} alt="" />

        <p className="row-paragraph-one">Confirme sua Doação</p>

        <form>
          <div>
            <label className="label-style">
              Nome completo
              <input className="input-style" type="text" />
            </label>

            <label className="label-style">
              Whatsapp
              <input className="input-style" type="text" />
            </label>
          </div>

          <div>
            <p className="row-paragraph-two">O que deseja doar?</p>
          </div>

          <Checkbox></Checkbox>

          <div className="row-date">
            <label className="label-style">
              Data de Entrega da Doação
              <input className="input-style" type="text" />
            </label>
          </div>

          <div className="row">
            <Button
              className="button-size-font button-size button-font"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
            >
              Confirmar
            </Button>
            <Button
              className="button-size-font button-size button-font button-color-cancel"
              background="var(--cinza)"
              backgroundHover="var(--cinza-claro)"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </section>

      <aside>
        <img src="" alt="" />
      </aside>
    </Container>
  );
};

export default Doacao;
