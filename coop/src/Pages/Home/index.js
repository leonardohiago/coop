import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import initial from "../../assets/initial-form.png";
import connection from "../../assets/connection-form.png";
import question from "../../assets/question-form.png";
import imagem4 from "../../assets/imagem4.png";
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
    history.push('/ongs');
  }

  function handleScroll(e, ref) {
    e.preventDefault();

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <>
      <Header logado={false}>
        <nav>
          <a href="/" onClick={(e) => handleScroll(e, sectionColabore)}>
              Início
          </a>
          <a href="/" onClick={(e) => handleScroll(e, sectionQuemSomos)}>
              Quem somos
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
        <section ref={sectionColabore}>
          <div>
            <p className="titulo_lado_esquerdo">Colabore com o trabalho de ONGs</p>
            <p className="texto_lado_esquerdo">
              Através da nossa plataforma você pode cooperar com o trabalho de
              diversas ONGs brasileiras, colaborando com a melhora da vida de
              milhares de pessoas.
            </p>

            <Button 
              onClick={handleClickQueroColaborar}
              className="botao_lado_esquerdo" 
              background="var(--roxo)" 
              backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>

          <div>
            <img className="imagem1" src={initial} alt="" />
          </div>
        </section>

        <section ref={sectionQuemSomos}>
          <div>
            <img src={connection} alt="" />
          </div>

          <div>
            <p className="titulo_lado_direito">Quem somos</p>
            <p className="texto_lado_direito">
              Coop é uma plataforma gratuíta que conecta pessoas à ONGs dentro
              de um só lugar. Ajudando diversas ONGs a continuarem com seus
              trabalhos sociais, através da doação dos nossos usuários.
            </p>
            <Button 
              onClick={handleClickQueroColaborar}
              background="var(--roxo)" 
              backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>
        </section>

        <section ref={sectionComoFunciona}>
          <div>
            <p className="titulo_lado_esquerdo">Como funciona</p>
            <p className="texto_lado_esquerdo">
              Por meio da nossa plataforma você consegue encontrar perfis com
              informações das ONGs de todo o Brasil, inclusive as que estão mais
              próximas de onde você mora. Após você encontrar a ONG que deseja
              realizar a doação, você pode entrar em contato com a mesma e
              concretizar sua doação, seja ela qual for.
            </p>

            <Button 
              onClick={handleClickQueroColaborar}
              className="botao_lado_esquerdo" 
              background="var(--roxo)" 
              backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>

          <div>
            <img src={question} alt="" />
          </div>
        </section>

        <section ref={sectionResponsaveis}>
          <div>
            <img src={imagem4} alt="" />
          </div>

          <div>
            <p className="titulo_lado_direito">Responsáveis</p>
            <p className="texto_lado_direito">
              Essa é a equipe responsável pela criação e desenvolvimento dessa
              plataforma maravilhosa, que visa juntamente com sua ajuda, poder
              melhorar a vida de milhares de pessoas.
            </p>

            <Button 
              onClick={handleClickQueroColaborar}
              background="var(--roxo)" 
              backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
