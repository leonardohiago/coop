import React from "react";

import { Container } from "./styles";
import imagem1 from "../../assets/imagem1.jpg";
import imagem2 from "../../assets/imagem2.jpg";
import imagem3 from "../../assets/imagem3.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Button from '../../Components/Button';

const Home = () => {
  return (
    <>
      <Header logado={false} />

      <Container>
        <section>
          <div>
            <p class="titulo_lado_esquerdo">Colabore com o trabalho de ONGs</p>
            <p class="texto_lado_esquerdo">
              Através da nossa plataforma você pode cooperar com o trabalho de
              diversas ONGs brasileiras, colaborando com a melhora da vida de
              milhares de pessoas.
            </p>

            <Button  background="var(--roxo)" backgroundHover="var(--verde)">
                    Quero Colaborar
            </Button>
          </div>

          <div>
            <img src={imagem1} />
          </div>
        </section>
      </Container>

      <Container>
        <section>
          <div>
            <img src={imagem2} />
          </div>

          <div>
            <p class="titulo_lado_direito">Quem somos</p>
            <p class="texto_lado_direito">
              Coop é uma plataforma gratuíta que conecta pessoas à ONGs dentro
              de um só lugar. Ajudando diversas ONGs a continuarem com seus
              trabalhos sociais, através da doação dos nossos usuários.
            </p>
          <div class= "teste">
              Quero Colaborar
          </div>

          </div>

        </section>
      </Container>

      <Container>
        <section>

          <div>
            <p class="titulo_lado_esquerdo">Como funciona</p>
            <p class="texto_lado_esquerdo">
              Por meio da nossa plataforma você consegue encontrar perfis com
              informações das ONGs de todo o Brasil, inclusive as que estão mais
              próximas de onde você mora. Após você encontrar a ONG que deseja
              realizar a doação, você pode entrar em contato com a mesma e
              concretizar sua doação, seja ela qual for.
            </p>

            <a class="botao_lado_esquerdo" href="#">
              Quero Colaborar
            </a>
          </div>

          <div>
            <img src={imagem2} />
          </div>
        
        
    
        </section>


      </Container>

      

      <Container>

      <section>
          <div>
            <img src={imagem3} />
          </div>

          <div>
            <p class="titulo_lado_direito">Responsáveis</p>
            <p class="texto_lado_direito">
            Essa é a equipe responsável pela criação e desenvolvimento dessa
            plataforma maravilhosa, que visa juntamente com sua ajuda, poder
            melhorar a vida de milhares de pessoas..
            </p>

            <a class="botao_lado_direito" href="#">
              Quero Colaborar
            </a>
          </div>
        
    
        </section>



        {/* <div class="quadro4">
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
                Essa é a equipe responsável pela criação e desenvolvimento dessa
                plataforma maravilhosa, que visa juntamente com sua ajuda, poder
                melhorar a vida de milhares de pessoas..
              </div>
              <div class="botao1_quadro4">
                <a href="#" class="texto3_quadro4">
                  Quero Colaborar
                </a>
              </div>
            </div>
          </div>
          <div class="fim_quadro4"></div>
        </div> */}
      </Container>

      <Footer />
    </>
  );
};

export default Home;
