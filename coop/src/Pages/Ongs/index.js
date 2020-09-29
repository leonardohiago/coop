import React from "react";

import { Container, ListLastOngs, ListLastActions } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BoxOngResumo from '../../Components/BoxOngResumo';
import MapSearchOng from '../../Components/MapSearchOng';
import BoxOngLastAction from '../../Components/BoxOngLastAction';

import logoOng1 from '../../assets/img_ong_acoes/logo-1.png';
import logoOng2 from '../../assets/img_ong_acoes/logo-2.png';
import fotoOng1 from '../../assets/img_ong_acoes/1.png';
import fotoOng2 from '../../assets/img_ong_acoes/2.png';


const Home = () => {
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

  return (
    <>
      <Header />

      <Container>
        <ListLastOngs>
          <h2>Últimas ONGs cadastradas</h2>

          <BoxOngResumo />
          <BoxOngResumo />
          <BoxOngResumo />
          <BoxOngResumo />
        </ListLastOngs>
          
        <MapSearchOng />

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
