import React from "react";

import { Container, Content, Form, Subtitle } from "./styles";

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
          <Form>
            <Subtitle>Editar Itens de Doação</Subtitle>

            <ItensDoacao />
          </Form>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardItens;
