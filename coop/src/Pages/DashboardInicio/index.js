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
      // Pega todas as doaçõe feitas para ONG
      api.get(`/doacao/${id}`).then((response) => {
        SetListaDoacoes(response.data.doacoes);
      });
  
      // Pega o número total de doações com o status de aguardando
      api.get(`/doacao/${id}/total`).then((response) => {
        SetNumDoacoesPendentes(response.data);
      });
  
      // Pega o número total de doações canceladas
      api.get(`/doacao/${id}/total?status=Cancelado`).then((response) => {
        SetNumDoacoesCanceladas(response.data);
      });
  
      // Pega o número total de doações recebidas
      api.get(`/doacao/${id}/total?status=Recebido`).then((response) => {
        SetNumDoacoesRecebidas(response.data);
      });
  }, [id]);

  const handleAlterarStatus = (doacao, status) => {
    doacao.statusEntrega = status;

    api.post(`/doacao/alterar-status/${doacao.id}`, doacao).then(response => {
      SetListaDoacoes(listaDoacoes.filter(doacaoAtual => {
        return doacaoAtual.id !== doacao.id ? doacaoAtual : {...doacao, statusEntrega: status};
      }));

      (status === 'Recebido') ? SetNumDoacoesRecebidas(numDoacoesRecebidas + 1) : SetNumDoacoesCanceladas(numDoacoesCanceladas + 1);

      SetNumDoacoesPendentes(numDoacoesPendentes - 1);
    })
  }

  return (
    <>
      <Header />

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
                      {
                        doacao.statusEntrega === 'Aguardando' ? (
                          <>
                            <ButtonDoado color="verde" onClick={() => handleAlterarStatus(doacao, 'Recebido')}>Sim</ButtonDoado>
                            <ButtonDoado color="vermelho" onClick={() => handleAlterarStatus(doacao, 'Cancelado')}>Não</ButtonDoado>
                          </>
                        ) : (
                          doacao.statusEntrega
                        )
                      }
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
