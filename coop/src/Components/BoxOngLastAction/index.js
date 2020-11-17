import React from 'react'

import { Container, Header, Foto } from './styles';
import Button from '../Button';

const BoxOngResumo = ({publicacao}) => {
  
  return (
    <Container>
      <Header>
        <img src={`http://localhost:8080/api/imagem/logo-${publicacao.ong.id}.png`} alt={`Logo - ${publicacao.ong.nome_ong}`}/>
        <h3>{publicacao.ong.nome_ong}</h3>
  
        <Button background="var(--verde)" backgroundHover="var(--roxo)">
          Colaborar
        </Button>
      </Header>

      <Foto>
        <img src={`http://localhost:8080/api/imagem/${publicacao.imagem_publicacao}`} alt={`Ação realizada por ${publicacao.ong.nome_ong}`} />
      </Foto>

      <p>{publicacao.legenda_publicacao}</p>
    </Container>
  );
}

export default BoxOngResumo;