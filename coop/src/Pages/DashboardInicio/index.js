import React, { useEffect, /*useState*/ } from "react";

import {
  Container,
  Content,
  StatusDoacoes,
  BoxStatus,
  // ButtonDoado,
} from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";

// import api from "../../services/api";

const DashboardInicio = () => {
  // const [listaDoacoes, SetListaDoacoes] = useState([]);

  useEffect(() => {
    // api.get(`/doacao`).then((response) => {
    //   let doacao = [];

    //   response.data.forEach((doacoes) => {
    //     doacao.push(doacoes);
    //   });

    //   SetListaDoacoes(doacao);
    // });
  });

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
              {/* {listaDoacoes.map((doacao) => (
                <tr key={doacao.id_doacao}>
                  <td>{doacao.id_doacao}</td>
                  <td>{doacao.nomeCompleto}</td>
                  <td>{doacao.itensDoacao}</td>
                  <td>
                    <ButtonDoado color="verde">Sim</ButtonDoado>
                    <ButtonDoado color="vermelho">Não</ButtonDoado>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardInicio;
