import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  StatusDoacoes,
  BoxStatus,
  ButtonDoado,
} from "./styles";

import { useAuth } from '../../hooks/auth';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";

import api from "../../services/api";

const DashboardInicio = () => {
  const { id } = useAuth();
  const [listaDoacoes, SetListaDoacoes] = useState([]);
  const [numDoacoesRecebidas, SetNumDoacoesRecebidas] = useState(0);
  const [numDoacoesPendentes, SetNumDoacoesPendentes] = useState(0);
  const [numDoacoesCanceladas, SetNumDoacoesCanceladas] = useState(0);

  useEffect(() => {
    api.get(`/doacao/${id}`).then((response) => {
      SetListaDoacoes(response.data.doacoes);
    });
  }, [id]);

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />

        <Content>
          <StatusDoacoes>
            <BoxStatus color="verde">
              <span>{numDoacoesRecebidas}</span>
              <p>Doações Recebidas</p>
            </BoxStatus>

            <BoxStatus color="amarelo">
              <span>{numDoacoesPendentes}</span>
              <p>Doações Pendentes</p>
            </BoxStatus>

            <BoxStatus color="vermelho">
              <span>{numDoacoesCanceladas}</span>
              <p>Doações Canceladas</p>
            </BoxStatus>
          </StatusDoacoes>

          <h2>Doações</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome do Doador</th>
                <th>Item Doado</th>
                <th>Recebido?</th>
              </tr>
            </thead>

            <tbody>
              {listaDoacoes.length > 0 ? 
                listaDoacoes.map((doacao) => (
                  <tr key={doacao.id}>
                    <td>{doacao.id}</td>
                    <td>{doacao.nomeCompleto}</td>
                    <td>{doacao.itensDoacao}</td>
                    <td>
                      <ButtonDoado color="verde">Sim</ButtonDoado>
                      <ButtonDoado color="vermelho">Não</ButtonDoado>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4">
                      <h2>Não há doações!</h2>
                    </td>
                  </tr>
                ) 
              }
            </tbody>
          </table>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardInicio;
