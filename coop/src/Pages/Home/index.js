/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import initial from "../../assets/piggy_bank.gif";
import connection from "../../assets/connection-form.png";
import question from "../../assets/question-form.png";
import equipe from "../../assets/equipe.png";
import HeaderHome from "../../Components/Header";
// import BurguerMenu from "../../Components/BurguerMenu";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";

const Home = () => {
  const sectionColabore = useRef(null);
  const sectionQuemSomos = useRef(null);
  const sectionComoFunciona = useRef(null);
  const sectionResponsaveis = useRef(null);
  const history = useHistory();

  function handleClickQueroColaborar() {
    history.push("/ongs");
  }

  function handleScroll(e, ref) {
    e.preventDefault();

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <HeaderHome>
        <nav>
          <a href="/" onClick={(e) => handleScroll(e, sectionColabore)}>
            Início
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionQuemSomos)}>
            O que é o Coop?
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionComoFunciona)}>
            Como funciona
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionResponsaveis)}>
            Responsáveis
          </a>
        </nav>
      </HeaderHome>

      <Container>
        <section ref={sectionColabore}>
          <section className="section-one">
            <div>
              <p className="titulo_lado_esquerdo">
                Colabore com o trabalho de ONGs
              </p>
              <p className="texto_lado_esquerdo">
                Através da nossa plataforma você pode cooperar com o trabalho de
                diversas ONGs brasileiras, colaborando com a melhora da vida de
                milhares de pessoas.
              </p>

              <Button
                onClick={handleClickQueroColaborar}
                className="botao_lado_esquerdo"
                background="var(--roxo)"
                backgroundHover="var(--verde)"
              >
                Quero Colaborar
              </Button>
            </div>

            <div className="imagem1">
              <img src={initial} alt="Cofrinho" />
            </div>
          </section>
        </section>

        <section ref={sectionQuemSomos}>
          <div>
            <img src={connection} alt="" />
          </div>

          <div>
            <p className="titulo_lado_direito">O que é o Coop?</p>
            <p className="texto_lado_direito">
              Coop é uma plataforma gratuita que conecta pessoas à ONGs dentro
              de um só lugar. Ajudando diversas ONGs a continuarem com seus
              trabalhos sociais, através da sua doação.
            </p>
            <Button
              onClick={handleClickQueroColaborar}
              background="var(--roxo)"
              backgroundHover="var(--verde)"
            >
              Quero Colaborar
            </Button>
          </div>
        </section>

        <section ref={sectionComoFunciona}>
          <div>
            <p className="titulo_lado_esquerdo">Como funciona</p>
            <p className="texto_lado_esquerdo">
              Acesse a página Ongs clicando em "Quero Colaborar"; Escolha a Ong
              para qual deseja fazer a doação; Clique em "Colaborar" e, por fim,
              escolha o quê e quando deseja doar. Pronto! Sua colaboração pode
              mudar o mundo de muitas pessoas.
            </p>

            <Button
              onClick={handleClickQueroColaborar}
              className="botao_lado_esquerdo"
              background="var(--roxo)"
              backgroundHover="var(--verde)"
            >
              Quero Colaborar
            </Button>
          </div>

          <div>
            <img src={question} alt="" />
          </div>
        </section>

        <section ref={sectionResponsaveis}>
          <div>
            <img className="equipe" src={equipe} alt="Equipe do Coop" />
          </div>

          <div className="responsaveis">
            <p className="titulo_lado_direito">Responsáveis</p>
            <p className="texto_lado_direito">
              Esta é a equipe responsável pela criação e desenvolvimento desta
              plataforma, que visa, juntamente com sua ajuda, poder melhorar a
              vida de milhares de pessoas. Os integrantes são:{" "}
              <button className="nomes">
                <a
                  href="https://www.linkedin.com/in/jussara-andrade-731731142?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BObBdvfQCShC8cGHBmjWm%2Bg%3D%3D"
                  target="_blank"
                >
                  Jussara
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a
                  href="https://www.linkedin.com/in/leonardo-hiago-a398001a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpcE0WYdiSbicM6H92WsQYg%3D%3D"
                  target="_blank"
                >
                  Leonardo *
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a
                  href="https://www.linkedin.com/in/vinicius-sedrim-b776a5158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B39c%2F4S1FT8K3oklksXlKVQ%3D%3D"
                  target="_blank"
                >
                  Vinicius
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a
                  href="https://www.linkedin.com/in/samuel-damasceno-filho-84ab1313a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnoKnyz%2F6Twac6ETuc%2Bd80g%3D%3D"
                  target="_blank"
                >
                  Samuel
                </a>
              </button>{" "}
              e{" "}
              <button className="nomes">
                <a
                  href="https://www.linkedin.com/in/rayannebertolacelima?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxG7auYDsRbGhv5rSifkjzw%3D%3D"
                  target="_blank"
                >
                  Rayanne
                </a>
              </button>
              .
            </p>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
