import React from "react";

import { Container, Content } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import Button from "../../Components/Button";

const DashboardItens = () => (
  <>
    <Header logado={true} />

    <Container>
      <MenuDashboard />

      <Content>
        <section className="contagem">
          <div className="dados">
            <p className="cor-recebidas" id="estilizacao">17</p>
            <p id="estilizacao_texto">
              Doações Recebidas
            </p>
          </div>

          <div className="dados">
        <p className="cor-pendentes" id="estilizacao">42</p>
        <p id="estilizacao_texto">Doações Pendentes</p>
      </div>

      <div className="dados">
        <p className="cor-canceladas" id="estilizacao">12</p>
        <p id="estilizacao_texto">Doações Canceladas</p>
      </div>


      </section>
      
      <section>
      <div class="texto-principal">Editar Itens de Doação</div>
        </section>

        <section class="itens">
      <div id="especial" class="quadrado"></div>
      <div class="quadrado"></div>
      <div class="quadrado"></div>
      <div id="especial" class="quadrado"></div>
      <div class="quadrado"></div>
      <div id="especial" class="quadrado"></div>
      <div class="quadrado"></div>
      <div class="quadrado"></div>
      <div class="quadrado"></div>
      <div class="quadrado"></div>
      <div class="quadrado"></div>
      <div id="especial" class="quadrado"></div>
    </section>

    <section>
    <div className="botoes">
            <Button
              className="botao-publicar"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
            >
              Publicar
            </Button>
            <Button
              className="botao-cancelar"
              background="var(--cinza)"
              backgroundHover="var(--cinza-claro)"
            >
              Cancelar
            </Button>
          </div>
          </section>
      </Content>
    </Container>

    <Footer />
  </>
);

export default DashboardItens;
