import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, ListLastOngs, ListLastActions } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxOngResumo from '../../Components/BoxOngResumo';
import MapSearchOng from '../../Components/MapSearchOng';
import BoxOngLastAction from '../../Components/BoxOngLastAction';

import logoOng1 from '../../assets/img_ong_acoes/logo-1.png';
import logoOng2 from '../../assets/img_ong_acoes/logo-2.png';
import fotoOng1 from '../../assets/img_ong_acoes/1.png';
import fotoOng2 from '../../assets/img_ong_acoes/2.png';
import { useCallback } from 'react';


const Home = () => {
  const [ultimasOngs, setUltimasOngs] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [ufSelecionada, setUfSelecionada] = useState('');

  const listOngs = [
    {
      id: 1,
      nome: 'Associação São Vicente de Paula',
      logo: logoOng1,
      foto: fotoOng1,
      texto: 'A certificação de metodologias que nos auxiliam a lidar com a execução dos pontos do programa assume importantes posições no estabelecimento dos paradigmas corporativos. Evidentemente...'
    },
    {
      id: 2,
      nome: 'Associação São João',
      logo: logoOng2,
      foto: fotoOng2,
      texto: 'Neste sentido, a necessidade de renovação processual maximiza as possibilidades por conta dos procedimentos normalmente adotados. Não obstante, o comprometimento entre as equipes aponta para a melhoria...'
    }
  ];

  useEffect(() => {
    api.get(`/ongs?pagina=0&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
    });
  }, []);

  const listarUltimasOngsUf = useCallback((uf) => {
    
    api.get(`/ongs/${uf}?pagina=0&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
      setUfSelecionada(uf);
    });
  }, []);

  const listarUltimasOngsCidade = useCallback((cidade) => {
    api.get(`/ongs/${ufSelecionada}/${cidade}?pagina=0&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
      setCidadeSelecionada(cidade);
    });
  }, [ufSelecionada]);

  return (
    <>
      <Header />

      <Container>
        <ListLastOngs>
          {ufSelecionada === '' && cidadeSelecionada === ''
            ? <h2>Últimas ONGs cadastradas</h2>
            : cidadeSelecionada === ''
              ? <h2>Últimas ONGs cadastradas em {ufSelecionada}</h2>
              : <h2>Últimas ONGs cadastradas em {cidadeSelecionada}/{ufSelecionada}</h2>
          }

          {ultimasOngs.map(ong => (
            <BoxOngResumo ong={ong} key={ong.id} />
          ))}
        </ListLastOngs>
          
        <MapSearchOng 
          listarUltimasOngsUf={listarUltimasOngsUf} 
          listarUltimasOngsCidade={listarUltimasOngsCidade} 
        />

        <ListLastActions>
          <h2>Ações Realizadas</h2>

          {listOngs.map(ong => (
            <BoxOngLastAction
              key={ong.id}
              ong={ong}
            />
          ))}
        </ListLastActions>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
