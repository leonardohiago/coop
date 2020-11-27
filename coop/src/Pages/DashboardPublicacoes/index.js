import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { MdDelete } from 'react-icons/md';
import { Container, StatusDoacoes, BoxStatus, Content, Input, Form, Field, SubmitButton, CancelButton, FieldButtons, BoxConfirmarExclusao, ButtonExcluir } from './styles';

import api from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import Upload from '../../Components/Upload';
import Modal from '../../Components/Modal';
import Button from "../../Components/Button";

const DashboardInicio = () => {
  const { id } = useAuth();
  const { addToast } = useToast();
  const [listaPublicacoes, SetListaPublicacoes] = useState([]);
  const [numPublicacoesRealizadas, SetNumPublicacoesRealizadas] = useState(0);
  const [numTotalVisealizacoes, SetNumTotalVisealizacoes] = useState(0);
  const [numMedioVisualizacoes, SetNumMedioVisualizacoes] = useState(0);

  const [publicacaoParaExcluir, setPublicacaoParaExcluir] = useState({});

  const [showModalConfirmacaoExclusao, setShowModalConfirmacaoExclusao] = useState(false);

  useEffect(() => {
      // Pega todas as publicações feitas pela ONG
      api.get(`/publicacao/${id}`).then((response) => {
        SetListaPublicacoes(response.data.publicacoes.map(pub => {
          return {...pub, data_publicacao: format(parseISO(pub.data_publicacao), 'dd/MM/yyyy')}
        }));
      });
  
      // Pega o número total de publicacoes da ONG
      api.get(`/publicacao/${id}/total`).then((response) => {
        SetNumPublicacoesRealizadas(response.data);
      });
  
      // Pega o número total de visualizações das publicações
      api.get(`/publicacao/${id}/total-visualizacoes`).then((response) => {
        SetNumTotalVisealizacoes(response.data);
      });
  
      // Pega a média das visualizações das publicações
      api.get(`/publicacao/${id}/media-visualizacoes`).then((response) => {
        SetNumMedioVisualizacoes(response.data);
      });
  }, [id]);

  const handleExcluirPublicacao = (idPub) => {    
    api.delete(`/publicacao/delete/${idPub}`).then((response) => {
      SetListaPublicacoes(listaPublicacoes.filter(pub => {
        return pub.id !== idPub && pub;
      }));

      setPublicacaoParaExcluir({});
      setShowModalConfirmacaoExclusao(false);

      addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Publicação foi excluída com sucesso!',
      });
    }).catch(err => {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Não foi possível excluir a publicação.',
      });
    });
  }

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />

        <Content>
          <StatusDoacoes>
            <BoxStatus color="verde">
              <span>{numPublicacoesRealizadas}</span>
              <p>Publicações Realizadas</p>
            </BoxStatus>

            <BoxStatus color="amarelo">
              <span>{numTotalVisealizacoes}</span>
              <p>Visualização Total</p>
            </BoxStatus>

            <BoxStatus color="vermelho">
              <span>{numMedioVisualizacoes}</span>
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
                <th>Excluir</th>
              </tr>
            </thead>

            <tbody>
              {listaPublicacoes.map(publicacao => (
                <tr key={publicacao.id}>
                  <td>{publicacao.id}</td>
                  <td>{publicacao.titulo_publicacao}</td>
                  <td>{publicacao.data_publicacao}</td>
                  <td>
                    <ButtonExcluir onClick={() => { setShowModalConfirmacaoExclusao(true); setPublicacaoParaExcluir(publicacao); }}>
                      <MdDelete />
                    </ButtonExcluir>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Container>

      <Modal show={showModalConfirmacaoExclusao}>
        <BoxConfirmarExclusao>
          <h2>Quer mesmo excluir a publicação?</h2>
          
          <div>
            <Button
              background="var(--verde)"
              backgroundHover="var(--vermelho)"
              colorText="var(--preto)"
              colorTextHover="var(--cinza-claro)"
              onClick={() =>  handleExcluirPublicacao(publicacaoParaExcluir.id)}
            >
              Sim
            </Button>
            <Button
              background="var(--cinza)"
              backgroundHover="var(--cinza-escuro)"
              colorText="var(--preto)"
              colorTextHover="var(--cinza-claro)"
              onClick={() => setShowModalConfirmacaoExclusao(false)}
            >
              Não
            </Button>
          </div>
        </BoxConfirmarExclusao>
      </Modal>

      <Footer />
    </>
  );
}

export default DashboardInicio;