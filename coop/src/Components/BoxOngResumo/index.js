import React, { useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail } from 'react-icons/md';

import { Container, InfoOng, Contato } from './styles';
import Button from '../Button';
import ItensNecessarios from '../ItensNecessarios';

const BoxOngResumo = (props) => {
  const history = useHistory();

  const ong = useMemo(() => {
    return {...props.ong, whatsapp_ong: props.ong.whatsapp_ong.replace(/-|\(|\)|\s/g, '')};
  }, [props.ong]);

  const itensRequeridos = ong.itens_doacao_requeridos.replace(' ', '').split(',');

  const handleClickColaborar = () => {
    history.push(`/doacao/${ong.id}`)
  }

  return (
    <Container>
      <header>
        <InfoOng>
          <Link to={`/perfil/${ong.id}`}>
            <h3>{ong.nome_ong}</h3>
            <h4>{ong.logradouro_local_ong}, {ong.numero_local_ong} - {ong.cidade_local_ong} - {ong.estado}</h4>
          </Link>
        </InfoOng>

        <Contato>
          <a href={`mailto:${ong.email}`}><MdMail /></a>
          {
            ong.whatsapp_ong && (
              <a href={`https://api.whatsapp.com/send?phone=55${ong.whatsapp_ong}&text=&source=&data=&app_absent=`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            )
          }
          {
            ong.facebook_ong && (
              <a href={ong.facebook_ong} target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
            )
          }
          {
            ong.instagram_ong && (
              <a href={ong.instagram_ong} target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
            )
          }
        </Contato>
      </header>

      <hr/>

      <footer>
        <ItensNecessarios itens={itensRequeridos} />

        <Button background="var(--verde)" backgroundHover="var(--roxo)" onClick={handleClickColaborar}>
          Colaborar
        </Button>
      </footer>
    </Container>
  );
}

export default BoxOngResumo;