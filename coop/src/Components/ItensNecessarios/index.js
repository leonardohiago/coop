import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Container, LabelNecessidade } from "./styles";

const ItensNecessarios = () => (
  <Container>
    <LabelNecessidade necessidade="baixa">
      <AiOutlineInfoCircle />
      <span>Fralda</span>
    </LabelNecessidade>

    <LabelNecessidade necessidade="media">
      <AiOutlineInfoCircle />
      <span>Remédio</span>
    </LabelNecessidade>

    <LabelNecessidade necessidade="alta">
      <AiOutlineInfoCircle />
      <span>Alimento </span>
    </LabelNecessidade>

    <LabelNecessidade necessidade="baixa">
      <AiOutlineInfoCircle />
      <span>Pessoa</span>
    </LabelNecessidade>
  </Container>
);

export default ItensNecessarios;
