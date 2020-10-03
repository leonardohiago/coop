import React from 'react'

import { Container, Header, Foto } from './styles';
import Button from '../Button';

const BoxOngResumo = ({ong}) => {
  
  return (
    <Container>
      <Header>
        <img src={ong.logo} alt={`Logo - ${ong.nome}`}/>
        <h3>{ong.nome}</h3>
  
        <Button background="var(--verde)" backgroundHover="var(--roxo)">
          Colaborar
        </Button>
      </Header>

      <Foto>
        <img src={ong.foto} alt={`Ação realizada por ${ong.nome}`} />
      </Foto>

      <p>{ong.texto}</p>
    </Container>
  );
}

export default BoxOngResumo;