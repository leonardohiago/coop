import React from 'react'
import { AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdPhoneInTalk} from 'react-icons/md';

import { Container, InfoOng, Contato } from './styles';
import Button from '../Button';
import ItensNecessarios from '../ItensNecessarios';

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
      <ItensNecessarios />

      <Button background="var(--verde)" backgroundHover="var(--roxo)">
        Colaborar
      </Button>
    </footer>
  </Container>
);

export default BoxOngResumo;