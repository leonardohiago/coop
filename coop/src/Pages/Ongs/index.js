import React from "react";

import { Container, ListLastOngs } from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BoxOngResumo from '../../Components/BoxOngResumo';

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <ListLastOngs>
          <h2>Últimas ONGs cadastradas</h2>

          <BoxOngResumo />
          <BoxOngResumo />
          <BoxOngResumo />
          <BoxOngResumo />
        </ListLastOngs>

        
      </Container>

      <Footer />
    </>
  );
};

export default Home;
