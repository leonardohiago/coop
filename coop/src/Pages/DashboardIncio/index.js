import React from 'react';

import { Container, Content, StatusDoacoes, BoxStatus, ButtonDoado } from './styles';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";

const DashboardInicio = () => {
  const listDoacoes = [
    {
      id: '001',
      doador: 'João Pedro Ferreira da Silva',
      item: 'Fraldas, Alimento',
    },
    {
      id: '002',
      doador: 'José Pereira Moraes',
      item: 'Alimento',
    },
    {
      id: '003',
      doador: 'Arnaldo Coelho',
      item: 'Água ',
    },
    {
      id: '004',
      doador: 'Fred Medeiros',
      item: 'Dinheiro, Brinquedo',
    },
    {
      id: '005',
      doador: 'Margarete Silva de Oliveira',
      item: 'Dinheiro',
    },
    {
      id: '006',
      doador: 'Maria Josefa da Silva',
      item: 'Brinquedo',
    },
    {
      id: '007',
      doador: 'Emerson Silva de Oliveira',
      item: 'Dinnheiro, Alimento',
    },
    {
      id: '008',
      doador: 'Josefa Lemos',
      item: 'Água, Alimento',
    },
    {
      id: '009',
      doador: 'Felipe Reginaldo',
      item: 'Dinheiro, Alimento',
    },
    {
      id: '010',
      doador: 'Tarcisio Mendes',
      item: 'Dinheiro',
    },
  ];

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
              {listDoacoes.map(doacao => (
                <tr key={doacao.id}>
                  <td>{doacao.id}</td>
                  <td>{doacao.doador}</td>
                  <td>{doacao.item}</td>
                  <td>
                    <ButtonDoado color="verde">Sim</ButtonDoado>
                    <ButtonDoado color="vermelho">Não</ButtonDoado>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Container>

      <Footer />
    </>
  );
}

export default DashboardInicio;