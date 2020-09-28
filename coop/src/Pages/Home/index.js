import React from "react";

import { Container } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <section>
          <div class="quadro1">
            <div class="foto2_quadro1">
              <div class="foto1_quadro1"></div>
              <p class="texto1_quadro1">Colabore com o trabalho de ONGs</p>
              <p class="texto2_quadro1">
                Através da nossa plataforma você pode cooperar com o trabalho de
                diversas ONGs brasileiras, colaborando com a melhora da vida de
                milhares de pessoas.
              </p>
              <div class="botao1_quadro1">
                <a href="#" class="texto3_quadro1">
                  Quero Colaborar
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section>
          <div class="quadro2">
            <div class="foto2_quadro2">
              <div class="foto1_quadro2">
                <div class="texto1_quadro2">Quem somos</div>
                <p class="texto2_quadro2">
                  Coop é uma plataforma gratuíta que conecta pessoas à ONGs
                  dentro de um só lugar. Ajudando diversas ONGs a continuarem
                  com seus trabalhos sociais, através da doação dos nossos
                  usuários.
                </p>
                <div class="botao1_quadro2">
                  <a href="#" class="texto3_quadro2">
                    Quero Colaborar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <div class="quadro3">
          <div class="foto2_quadro3">
            <div class="foto1_quadro3"></div>
            <div class="texto1_quadro3">Como funciona</div>
            <div class="texto2_quadro3">
              Por meio da nossa plataforma você consegue encontrar perfis com
              informações das ONGs de todo o Brasil, inclusive as que estão mais
              próximas de onde você mora. Após você encontrar a ONG que deseja
              realizar a doação, você pode entrar em contato com a mesma e
              concretizar sua doação, seja ela qual for
            </div>
            <div class="botao1_quadro3">
              <a href="#" class="texto3_quadro3">
                Quero Colaborar
              </a>
            </div>
          </div>
        </div>
      </Container>


      <Container>
          
      <div class="quadro4">
    <div class="foto2_quadro4">

      <div class="circuloG1"></div>
      <div class="circuloG2"></div>
      <div class="circuloG3"></div>
      <div class="circuloG4"></div>
      <div class="circuloP1"></div>
      <div class="circuloP2"></div>
      <div class="circuloP3"></div>
      <div class="circuloP4"></div>
      <div class="circuloP5"></div>

      <div class="foto1_quadro4">
        <div class="texto1_quadro4">Responsáveis</div>
        <div class="texto2_quadro4">
          Essa é a equipe responsável pela criação e desenvolvimento dessa plataforma maravilhosa,
          que visa juntamente com sua ajuda, poder melhorar a vida de milhares de pessoas..
        </div>
        <div class="botao1_quadro4">
          <a href="#" class="texto3_quadro4">Quero Colaborar</a>
        </div>
      </div>
    </div>
     <div class="fim_quadro4"></div>
  </div>




      </Container>

      <Footer />
    </>
  );
};

export default Home;
