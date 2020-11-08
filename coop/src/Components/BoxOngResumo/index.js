import React from 'react'
import { AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdPhoneInTalk} from 'react-icons/md';

import { Container, InfoOng, Contato } from './styles';
import Button from '../Button';
import ItensNecessarios from '../ItensNecessarios';

const BoxOngResumo = (props) => {
  const { ong } = props;
  const itensRequeridos = ong.itens_doacao_requeridos.replace(' ', '').split(',');

  return (
    <Container>
      <header>
        <InfoOng>
          <h3>{ong.nome_ong}</h3>
          <h4>{ong.logradouro_local_ong}, {ong.numero_local_ong} - {ong.cidade_local_ong} - {ong.estado}</h4>
        </InfoOng>

        <Contato>
          <a href={`mailto:${ong.email}`}><MdMail /></a>
          {
            ong.whatsapp_ong && (
              <a href={`https://api.whatsapp.com/send?phone=55${ong.whatsapp_ong.replace(/-|\(|\)|\s/g, '')}&text=&source=&data=&app_absent=`}><FaWhatsapp /></a>
            )
          }
          {
            
          }
          <AiOutlineInstagram />
          <AiFillFacebook />
        </Contato>
      </header>

      <hr/>

      <footer>
        <ItensNecessarios itens={itensRequeridos} />

        <Button background="var(--verde)" backgroundHover="var(--roxo)">
          Colaborar
        </Button>
      </footer>
    </Container>
  );
}

export default BoxOngResumo;