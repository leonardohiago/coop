import React, { useEffect, useState } from 'react';

import {
  Container,
  Content,
  Fotos
} from "./styles";

import api from "../../services/api";

import { useAuth } from '../../hooks/auth';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import UploaderFoto from '../../Components/UploaderFoto';

const DashboardFotos = () => {
  const { id } = useAuth();
  const [ong, setOng] = useState({});

  useEffect(() => {
    api.get(`/ongs/ong/${id}`).then((response) => {
      setOng(response.data);
    });
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <MenuDashboard />

        <Content>
          <h2>Fotos</h2>
          <Fotos>
            <UploaderFoto indice={1} url={ong.imagem_ong_1} idOng={id} />
            <UploaderFoto indice={2} url={ong.imagem_ong_2} idOng={id} />
            <UploaderFoto indice={3} url={ong.imagem_ong_3} idOng={id} />
            <UploaderFoto indice={4} url={ong.imagem_ong_4} idOng={id} />
            <UploaderFoto indice={5} url={ong.imagem_ong_5} idOng={id} />
          </Fotos>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardFotos;