import React from "react";
// import { AiOutlineInfoCircle } from "react-icons/ai";

import { Container, LabelNecessidade } from "./styles";

const ItensNecessarios = ({ itens }) => (
  <Container>
    {itens.map(item => (
      <LabelNecessidade key={item}>
        <span>{item}</span>
      </LabelNecessidade>
    ))}
  </Container>
);

export default ItensNecessarios;
