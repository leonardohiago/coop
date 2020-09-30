import React from "react";

import { Container } from "./styles";
import imagem1 from "../../assets/imagem1.jpg";
import imagem2 from "../../assets/imagem2.png";
import imagem3 from "../../assets/imagem3.jpg";
import imagem4 from "../../assets/imagem4.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <section>
          <div>
            <p class="titulo_lado_esquerdo">Colabore com o trabalho de ONGs</p>
            <p class="texto_lado_esquerdo">
              Através da nossa plataforma você pode cooperar com o trabalho de
              diversas ONGs brasileiras, colaborando com a melhora da vida de
              milhares de pessoas.
            </p>

            <Button className="botao_lado_esquerdo" background="var(--roxo)" backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>

          <div>
            <img src={imagem1} />
          </div>
        </section>

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
            <Button background="var(--roxo)" backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>
        </section>

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

            <Button className="botao_lado_esquerdo" background="var(--roxo)" backgroundHover="var(--verde)">
              Quero Colaborar
            </Button>
          </div>

          <div>
            <img src={imagem3} />
          </div>
        </section>

        <section>
          <div>
            <img src={imagem4} />
          </div>

          <div>
            <p class="titulo_lado_direito">Responsáveis</p>
            <p class="texto_lado_direito">
              Essa é a equipe responsável pela criação e desenvolvimento dessa
              plataforma maravilhosa, que visa juntamente com sua ajuda, poder
              melhorar a vida de milhares de pessoas.
            </p>

            <Button background="var(--roxo)" backgroundHover="var(--verde)">
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
