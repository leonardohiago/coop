import React from 'react';

import { Container, StatusDoacoes, BoxStatus, ButtonDoado, Content, Input, Form, Field, SubmitButton, CancelButton, FieldButtons } from './styles';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import Upload from '../../Components/Upload';

const DashboardInicio = () => {
  const listPublicacoes = [
    {
      id: '001',
      titulo: 'Ação de Carnaval',
      data: '11/02/2020',
    },
    {
      id: '002',
      titulo: 'Evento Social',
      data: '17/03/2020',
    },
    {
      id: '003',
      titulo: 'Ação de São João',
      data: '18/07/2020',
    },
    {
      id: '004',
      titulo: 'Distribuição de Sopa',
      data: '02/08/2020',
    },
    {
      id: '005',
      titulo: 'Ação da Independência',
      data: '07/09/2020',
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
              <span>5</span>
              <p>Publicações Realizadas</p>
            </BoxStatus>

            <BoxStatus color="amarelo">
              <span>2158</span>
              <p>Visualização Total</p>
            </BoxStatus>

            <BoxStatus color="vermelho">
              <span>432</span>
              <p>Visualização Média</p>
            </BoxStatus>
          </StatusDoacoes>

          <h2>Realizar Publicação</h2>
          <Form>
            <Field>
              <Upload />
              <label htmlFor="legendaPubl" style={{padding: "10px 0"}}>Legenda<span style={{color: "var(--roxo)", fontWeight: "700"}}>*</span></label>
              <Input
                type="text"
                id="legendaPubl"
                required />
            </Field>

            <FieldButtons>
              <SubmitButton>Publicar</SubmitButton>
              <CancelButton>Cancelar</CancelButton>
            </FieldButtons>
          </Form>
          

          <h2>Publicações</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome da Publicação</th>
                <th>Data</th>
                <th>Excluir?</th>
              </tr>
            </thead>

            <tbody>
              {listPublicacoes.map(publicacao => (
                <tr key={publicacao.id}>
                  <td>{publicacao.id}</td>
                  <td>{publicacao.titulo}</td>
                  <td>{publicacao.data}</td>
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