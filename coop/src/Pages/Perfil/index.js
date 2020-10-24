import React from 'react';

import { Container, CardOng, ListLastActions } from './styles';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Contato } from '../../Components/BoxOngResumo/styles';
import { AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdPhoneInTalk} from 'react-icons/md';

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
        <div className="banner-ong">
          <img src={bannerOng1} alt="" />
          <img src={logoOng1} alt="" className="logo-ong"/>
        </div>

        <section>
          <CardOng>
            <h2>Associação São Vicente de Paula</h2>

            <Contato>
              <MdMail />
              <MdPhoneInTalk />
              <FaWhatsapp />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </Contato>

            <p className="informacoes-ong">
              Ong é uma plataforma gratuíta que conecta pessoas à ONGs dentro de um só lugar. Ajudando diversas ONGs a continuarem com seus trabalhos sociais, através da doação dos nossos usuários.
            </p>

            <Button background="var(--verde)" backgroundHover="var(--roxo)">
              Colaborar
            </Button>            
          </CardOng>

          <ListLastActions>
            <h2>Ações Realizadas</h2>

            {listOngs.map(ong => (
              <BoxOngLastAction
                key={ong.id}
                ong={ong}
              />
            ))}
          </ListLastActions>
        </section>

      </Container>

      <Footer />
    </>
  );
};

export default Login;
