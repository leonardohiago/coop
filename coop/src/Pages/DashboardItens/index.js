import React from "react";

import { Container, Content, StatusDoacoes, BoxStatus, Form, Subtitle, FieldButtons, SubmitButton, CancelButton } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import ItensDoacao from "../../Components/ItensDoacao";

const DashboardItens = () => {

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />

        <Content>
          <StatusDoacoes>
            <BoxStatus color="verde">
              <span>17</span>
              <p>Doações Recebidas</p>
            </BoxStatus>

            <BoxStatus color="amarelo">
              <span>42</span>
              <p>Doações Pendentes</p>
            </BoxStatus>

            <BoxStatus color="vermelho">
              <span>12</span>
              <p>Doações Canceladas</p>
            </BoxStatus>
          </StatusDoacoes>

          <Form>
            <Subtitle>Editar Itens de Doação</Subtitle>

            <ItensDoacao />

            <FieldButtons>
              <SubmitButton>Atualizar</SubmitButton>
              <CancelButton>Cancelar</CancelButton>
            </FieldButtons>
          </Form>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardItens;
