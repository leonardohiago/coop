import React from "react"

import { Container, Section, Aside } from "./styles";
import FormularioDoacao from "../../Components/FormularioDoacao";

import obrigado from "../../assets/obrigado-vertical.png";

const Doacao = () => {
  return (
    <Container>
      <Section>
        <FormularioDoacao/>
      </Section>
      <Aside>
        <img className="logo-obrigado" src={obrigado} alt="obrigado" />
      </Aside>
    </Container>
  );
};

export default Doacao
