import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import api from "../../services/api";

import { Container, Header, Foto } from './styles';
import Button from '../Button';

const BoxOngResumo = ({publicacao, ong}) => {
  const history = useHistory();

  const handleClickColaborar = () => {
    history.push(`/doacao/${ong.id}`)
  }

  useEffect(() => {
    // Adiciona uma visualização para publicação cada vez que é visualizada
    api.put(`/publicacao/visualizacoes/${publicacao.id}`).then(response => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Container>
      <Header>
        <Link to={`/perfil/${ong.id}`}>
          {ong.logo ? (
            <img 
              src={ong.logo} 
              alt={ong.nome_ong}
            />
          ) : 
            ong.nome_ong && (
              <img 
                src={`https://ui-avatars.com/api/?name=${ong.nome_ong.replaceAll(' ', '+')}&size=80&background=ffffff`} 
                alt={ong.nome_ong}
              />
            )
          }
          <h3>{ong.nome_ong}</h3>
        </Link>
  
        <Button background="var(--verde)" backgroundHover="var(--roxo)" onClick={handleClickColaborar}>
          Colaborar
        </Button>
      </Header>

      
      <Foto>
        <Link to={`/perfil/${ong.id}`}>
          <img src={publicacao.imagem_publicacao} alt={`Ação realizada por ${ong.nome_ong}`} />
        </Link>
      </Foto>
      

      <Link to={`/perfil/${ong.id}`}>
        <p>{publicacao.legenda_publicacao}</p>
      </Link>
    </Container>
  );
}

export default BoxOngResumo;