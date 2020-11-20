import React from "react";

import api from '../../services/api';

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

  /*
            "id": 1,
            "email": "ongacaovida@gmail.com",
            "nome_ong": "ONG Ação Vida",
            "whatsapp_ong": "(81) 9 9999-9999",
            "sobre_ong": "Ong destinada a ajuda de pessoas que m",
            "facebook_ong": "https://www.facebook.com/ongacaovida",
            "instagram_ong": null,
            "logradouro_local_ong": "Rua tal",
            "numero_local_ong": "123456",
            "complemento_local_ong": null,
            "cep_local_ong": "36520000",
            "estado": "MG",
            "cidade": "VRB",
            "itens_doacao_requeridos": "Alimento, Roupa, Dinheiro"
  */

  /* vai receber o json pela api */
  const ong = {
    id: 1,
    nome_ong: "Associação São Vicente de Paula",
    contato: "",
    logradouro_local_ong: "Rua tal",
    numero_local_ong: "123456",
    complemento_local_ong: null,
    cep_local_ong: "36520000",
    estado: "MG",
    cidade: "VRB",
    logo: logoOng1,
    foto: fotoOng1,
    banner: [bannerOng1, bannerOng2, bannerOng3],
    sobre_ong:
      "A certificação de metodologias que nos auxiliam a lidar com a execução dos pontos do programa assume importantes posições no estabelecimento dos paradigmas corporativos. Evidentemente...",
    itens_doacao_requeridos: "Alimento,Roupa,Dinheiro",
  };

  const itensRequeridos = ong.itens_doacao_requeridos.replace(' ', '').split(',');

  const publicacao = {
    ong: {
      id: 1,
      nome_ong: "Associação São Vicente de Paula",
    },
    imagem_publicacao: "1.png",
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
              <img src={ong.banner[0]} className="banner" />
            </div>
            <div>
              <img src={ong.banner[1]} className="banner" />
            </div>
            <div>
              <img src={ong.banner[2]} className="banner" />
            </div>
            
          </Carousel>

          <img src={ong.logo} alt="" className="logo-ong" />
        </div>

        <section>
          <CardOng>
            <h2>{ong.nome_ong}</h2>
            <h4>{ong.logradouro_local_ong}, {ong.numero_local_ong}, {ong.complemento_local_ong} - {ong.cidade} / {ong.estado}</h4>

            <Contato>
              <MdMail />
              <MdPhoneInTalk />
              <FaWhatsapp />
              <AiOutlineInstagram />
              <AiFillFacebook />
            </Contato>

            <p className="informacoes-ong">{ong.sobre_ong}</p>

            <ItensNecessarios itens={itensRequeridos} />

            <Button background="var(--verde)" backgroundHover="var(--roxo)">
              Colaborar
            </Button>
          </CardOng>

          <ListLastActions>
            <h2>Ações Realizadas</h2>

            <BoxOngLastAction
              key={publicacao.id}
              publicacao={publicacao}
            />
          </ListLastActions>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Perfil;
