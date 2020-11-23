import React from 'react'
import { Link } from 'react-router-dom';

import { Container, Header, Foto } from './styles';
import Button from '../Button';

const BoxOngResumo = ({publicacao}) => {
  
  return (
    <Container>
      <Header>
        <Link to={`/perfil/${publicacao.ong.id}`}>
          <img src={`http://localhost:8080/api/imagem/logo-${publicacao.ong.id}.png`} alt={`Logo - ${publicacao.ong.nome_ong}`}/>
          <h3>{publicacao.ong.nome_ong}</h3>
        </Link>
  
        <Button background="var(--verde)" backgroundHover="var(--roxo)">
          Colaborar
        </Button>
      </Header>

      
      <Foto>
        <Link to={`/perfil/${publicacao.ong.id}`}>
          <img src={`http://localhost:8080/api/imagem/${publicacao.imagem_publicacao}`} alt={`Ação realizada por ${publicacao.ong.nome_ong}`} />
        </Link>
      </Foto>
      

      <Link to={`/perfil/${publicacao.ong.id}`}>
        <p>{publicacao.legenda_publicacao}</p>
      </Link>
    </Container>
  );
}

export default BoxOngResumo;