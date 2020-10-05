import React from 'react';

import { Container, CardOng, ListLastActions } from './styles';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import BoxOngLastAction from '../../Components/BoxOngLastAction';
import Button from '../../Components/Button';

import logoOng1 from '../../assets/img_ong_acoes/logo-1.png';
import fotoOng1 from '../../assets/img_ong_acoes/1.png';
import bannerOng1 from '../../assets/banner-ong1.png';

const Login = () => {
  const listOngs = [
    {
      id: 1,
      nome: 'Associação São Vicente de Paula',
      logo: logoOng1,
      foto: fotoOng1,
      texto: 'A certificação de metodologias que nos auxiliam a lidar com a execução dos pontos do programa assume importantes posições no estabelecimento dos paradigmas corporativos. Evidentemente...'
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <div className="banner-ong" style={{marginTop: '30px'}}>
          <img src={bannerOng1} alt="" />
          <img src={logoOng1} alt="" style={{height: '100px',
                                             width: '100px',
                                             position: 'relative',
                                             top: '-50px',
                                             right: '-50px',
                                             border: '5px solid #F2F2F2',
                                             borderRadius: '27px'}}/>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 60px 0 50px', marginBottom: '50px'}}>
          <CardOng>
            <h2>Associação São Vicente de Paula</h2>
            <div className="redes-sociais">

            </div>
            <p className="informacoes-ong">
              Ong é uma plataforma gratuíta que conecta pessoas à ONGs dentro de um só lugar. Ajudando diversas ONGs a continuarem com seus trabalhos sociais, através da doação dos nossos usuários.
            </p>

            <Button background="var(--verde)" backgroundHover="var(--roxo)" style={{width: '112px', height: '20px', fontSize: '12px', marginTop: '18px'}}>
              Colaborar
            </Button>            
          </CardOng>

          <ListLastActions>
            <h2>Ações Realizadas</h2>

            {listOngs.map(ong => (
              <BoxOngLastAction style={{width: '100%'}}
                key={ong.id}
                ong={ong}
              />
            ))}
          </ListLastActions>
        </div>

      </Container>

      <Footer />
    </>
  );
};

export default Login;
