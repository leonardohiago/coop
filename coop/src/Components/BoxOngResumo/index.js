import React from 'react'
import { AiOutlineInfoCircle, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdPhoneInTalk} from 'react-icons/md';

import { Container, InfoOng, Contato, LabelNecessidade } from './styles';
import Button from '../Button';

const BoxOngResumo = () => (
  <Container>
    <header>
      <InfoOng>
        <h3>Associação São Vicente de Paula - Lar dos Idosos</h3>
        <h4>5ª Avenida, 10 - Municípios, Balneário Camboriú - SC</h4>
      </InfoOng>

      <Contato>
        <MdMail />
        <MdPhoneInTalk />
        <FaWhatsapp />
        <AiOutlineInstagram />
        <AiFillFacebook />
      </Contato>
    </header>

    <hr/>

    <footer>
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

      <Button background="var(--verde)" backgroundHover="var(--roxo)">
        Colaborar
      </Button>
    </footer>
  </Container>
);

export default BoxOngResumo;