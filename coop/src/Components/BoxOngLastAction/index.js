import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Container, Header, Foto } from './styles';
import Button from '../Button';

const BoxOngResumo = ({publicacao, ong}) => {
  const history = useHistory();

  const handleClickColaborar = () => {
    history.push(`/doacao/${ong.id}`)
  }
  
  return (
    <Container>
      <Header>
        <Link to={`/perfil/${ong.id}`}>
          <img src={`http://localhost:8080/api/imagem/logo-${ong.id}.png`} alt={`Logo - ${ong.nome_ong}`}/>
          <h3>{ong.nome_ong}</h3>
        </Link>
  
        <Button background="var(--verde)" backgroundHover="var(--roxo)" onClick={handleClickColaborar}>
          Colaborar
        </Button>
      </Header>

      
      <Foto>
        <Link to={`/perfil/${ong.id}`}>
          <img src={`http://localhost:8080/api/imagem/${publicacao.imagem_publicacao}`} alt={`Ação realizada por ${ong.nome_ong}`} />
        </Link>
      </Foto>
      

      <Link to={`/perfil/${ong.id}`}>
        <p>{publicacao.legenda_publicacao}</p>
      </Link>
    </Container>
  );
}

export default BoxOngResumo;