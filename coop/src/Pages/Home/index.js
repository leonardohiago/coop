import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import initial from "../../assets/initial-form.png";
import connection from "../../assets/connection-form.png";
import question from "../../assets/question-form.png";
import equipe from "../../assets/equipe.png";
import Header from "../../Components/Header";
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
      <Header className="tela" logado={false}>
        <nav>
          <a href="/" onClick={(e) => handleScroll(e, sectionColabore)}>
            Início
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionQuemSomos)}>
            O que é o Coop ?
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionComoFunciona)}>
            Como funciona
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionResponsaveis)}>
            Responsáveis
          </a>
        </nav>
      </Header>

      <Container>
        <section className="teste">
          <section ref={sectionColabore}>
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

            <div>
              <img className="imagem1" src={initial} alt="" />
            </div>
          </section>
        </section>

        <section ref={sectionQuemSomos}>
          <div>
            <img src={connection} alt="" />
          </div>

          <div>
            <p className="titulo_lado_direito">O que é o Coop ?</p>
            <p className="texto_lado_direito">
              Coop é uma plataforma gratuíta que conecta pessoas à ONGs dentro
              de um só lugar. Ajudando diversas ONGs a continuarem com seus
              trabalhos sociais, através da doação dos nossos usuários.
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
            Acesse a pagina Ongs clicando em Quero Colaborar,
            escolha a Ong para qual deseja fazer a doação,
            clique em Colaborar e por fim,escolha o quando quer doar.
            Pronto, com sua cooperação muitas pessoas serão ajudadas.
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
            <img className="equipe" src={equipe} alt=" " />
          </div>

          <div className="responsaveis">
            <p className="titulo_lado_direito">Responsáveis</p>
            <p className="texto_lado_direito">
              Essa é a equipe responsável pela criação e desenvolvimento dessa
              plataforma maravilhosa, que visa juntamente com sua ajuda, poder
              melhorar a vida de milhares de pessoas.Entre os integrantes da
              equipe estão (cima para baixo):{" "}
              <button className="nomes">
                <a href="https://www.linkedin.com/in/jussara-andrade-731731142?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BObBdvfQCShC8cGHBmjWm%2Bg%3D%3D">
                  Jussara
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a href="https://www.linkedin.com/in/leonardo-hiago-a398001a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpcE0WYdiSbicM6H92WsQYg%3D%3D">
                  Leonardo
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a href="https://www.linkedin.com/in/vinicius-sedrim-b776a5158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B39c%2F4S1FT8K3oklksXlKVQ%3D%3D">
                  Vinicius
                </a>
              </button>
              ,{" "}
              <button className="nomes">
                <a href="https://www.linkedin.com/in/samuel-damasceno-filho-84ab1313a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnoKnyz%2F6Twac6ETuc%2Bd80g%3D%3D">
                  Samuel
                </a>
              </button>{" "}
              e{" "}
              <button className="nomes">
                <a href="https://www.linkedin.com/in/rayannebertolacelima?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxG7auYDsRbGhv5rSifkjzw%3D%3D">
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
