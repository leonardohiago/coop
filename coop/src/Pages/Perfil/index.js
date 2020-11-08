import React from "react";

import { Container, CardOng, ListLastActions } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Contato } from "../../Components/BoxOngResumo/styles";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail, MdPhoneInTalk } from "react-icons/md";

import BoxOngLastAction from "../../Components/BoxOngLastAction";
import Button from "../../Components/Button";
import ItensNecessarios from "../../Components/ItensNecessarios";

import logoOng1 from "../../assets/img_ong_acoes/logo-1.png";
import fotoOng1 from "../../assets/img_ong_acoes/1.png";
import bannerOng1 from "../../assets/img_ong_banner/banner-ong1.png";
import bannerOng2 from "../../assets/img_ong_banner/banner-ong2.png";
import bannerOng3 from "../../assets/img_ong_banner/banner-ong3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Perfil = () => {
  /* vai receber o json pela api */
  const ongClicada = {
    id: 1,
    nome: "Associação São Vicente de Paula",
    contato: "",
    logo: logoOng1,
    foto: fotoOng1,
    banner: [bannerOng1, bannerOng2, bannerOng3],
    texto:
      "A certificação de metodologias que nos auxiliam a lidar com a execução dos pontos do programa assume importantes posições no estabelecimento dos paradigmas corporativos. Evidentemente...",
  };

  return (
    <>
      <Header />

      <Container>
        <div className="banner-ong">

          <Carousel
            showArrows={true}
            showThumbs={false}
            dynamicHeight={false}
            style={{ borderRadius: "20px;" }}
          >
            <div>
              <img src={ongClicada.banner[0]} className="banner" />
            </div>
            <div>
              <img src={ongClicada.banner[1]} className="banner" />
            </div>
            <div>
              <img src={ongClicada.banner[2]} className="banner" />
            </div>
            
          </Carousel>

          <img src={ongClicada.logo} alt="" className="logo-ong" />
        </div>

        <section>
          <CardOng>
            <h2>{ongClicada.nome}</h2>

            <Contato>
              <MdMail />
              <MdPhoneInTalk />
              <FaWhatsapp />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </Contato>

            <p className="informacoes-ong">{ongClicada.texto}</p>

            <ItensNecessarios />

            <Button background="var(--verde)" backgroundHover="var(--roxo)">
              Colaborar
            </Button>
          </CardOng>

          <ListLastActions>
            <h2>Ações Realizadas</h2>

            <BoxOngLastAction ong={ongClicada} />
          </ListLastActions>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Perfil;
