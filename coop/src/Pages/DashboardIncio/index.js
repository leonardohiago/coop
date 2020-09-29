import React from 'react';

import { Container, Content } from './styles';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";

const DashboardHome = () => (
  <>
    <Header logado={true} />

    <Container>
      <MenuDashboard />

      <Content>
        <h1>HOME</h1>
      </Content>
    </Container>

    <Footer />
  </>
);

export default DashboardHome;