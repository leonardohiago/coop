import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
import { MdDelete } from 'react-icons/md';

import { Container, StatusDoacoes, BoxStatus, Content, Form, Field, InputFile, FieldButtons, BoxConfirmarExclusao, ButtonExcluir } from './styles';

import api from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { validarTamanhoArquivo, validarExtensaoArquivo } from '../../utils';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";
import Modal from '../../Components/Modal';
import Input from '../../Components/Input';
import Button from "../../Components/Button";

const DashboardInicio = () => {
  const { id } = useAuth();
  const { addToast } = useToast();
  const formRef = useRef(null);
  const [listaPublicacoes, SetListaPublicacoes] = useState([]);
  const [numPublicacoesRealizadas, SetNumPublicacoesRealizadas] = useState(0);
  const [numTotalVisealizacoes, SetNumTotalVisealizacoes] = useState(0);
  const [numMedioVisualizacoes, SetNumMedioVisualizacoes] = useState(0);

  const [publicacaoParaExcluir, setPublicacaoParaExcluir] = useState({});
  const [showModalConfirmacaoExclusao, setShowModalConfirmacaoExclusao] = useState(false);

  const [publicando, setPublicando] = useState(false);
  const [fotoPublicacao, setFotoPublicacao] = useState(null);
  const [showErroFoto, setShowErroFoto] = useState(false);

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

  const handleSubmit = async (data, { reset }) => {
    try {
      setPublicando(true);

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        titulo_publicacao: Yup.string().required('Informe o título'),
        legenda_publicacao: Yup.string().required('Informe a legenda'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if(fotoPublicacao !== null) {
        setShowErroFoto(false);

        data.data_publicacao = format(new Date(), 'yyyy-MM-dd');
        data.fkOng = {id};
  
        await api.post(`/publicacao`, data).then(
          (response) => {
            setPublicando(false);
  
            SetListaPublicacoes([response.data, ...listaPublicacoes]);
  
            const dataUpload = new FormData();
  
            dataUpload.append('foto', fotoPublicacao);
  
            api.put(`/publicacao/foto/${response.data.id}`, dataUpload).then(response => {
              addToast({
                type: 'success',
                title: 'Sucesso',
                description: 'Publilcado com sucesso!',
              });
              
              reset();
            });  
          }
        ).catch(() => {
          setPublicando(false);
          
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Não foi possível publicar.',
          });
        });
      } else {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Insira a foto.',
        });

        setPublicando(false);
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;

          setPublicando(false);

          addToast({
            type: 'error',
            title: 'Erro',
            description: error.message,
          });
        });

        formRef.current.setErrors(validationErrors);

        if(fotoPublicacao === null) {
          setShowErroFoto(true);

          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Insira uma foto',
          });
        }
      }
    }
  }

  const handleValidarImagem = useCallback((e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if(!validarExtensaoArquivo(file)) {
        setFotoPublicacao(null);
  
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Foto deve ter extensão JPG ou PNG',
        });

        e.target.value = '';
        setShowErroFoto(true);
      } else if(!validarTamanhoArquivo(file)) {
        setFotoPublicacao(null);
  
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Foto não pode ter mais do que 2MB',
        });

        e.target.value = '';
        setShowErroFoto(true);
      } else {
        setShowErroFoto(false);
        setFotoPublicacao(file);
      }
    }
  }, [addToast]);

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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Field>
              <label style={{padding: "10px 0"}}>Foto<span style={{color: "var(--roxo)", fontWeight: "700"}}>*</span></label>
              <InputFile showErro={showErroFoto}>
                <label htmlFor="foto">
                  {fotoPublicacao !== null ? 
                    (fotoPublicacao.name) :
                    (<>
                      Clique para selecionar uma foto
                    </>)
                  }
                </label>
                <input type="file" name="foto" id="foto" onChange={handleValidarImagem} />  
              </InputFile>

              <label style={{padding: "10px 0"}}>Título<span style={{color: "var(--roxo)", fontWeight: "700"}}>*</span></label>
              <Input
                name="titulo_publicacao"
              />

              <label style={{padding: "10px 0"}}>Legenda<span style={{color: "var(--roxo)", fontWeight: "700"}}>*</span></label>
              <Input
                name="legenda_publicacao"
              />
            </Field>

            <FieldButtons>
              <Button
                className="button-size"
                background="var(--verde)"
                backgroundHover="var(--roxo)"
                type="submit"
              >
                {publicando ? 'Publicando...' : 'Publicar'}
              </Button>
              <Button
                className="button-size color-cancel"
                background="var(--cinza)"
                backgroundHover="var(--cinza-escuro)"
                colorText="var(--vermelho)"
                colorTextHover="var(--preto)"
                onClick={() => formRef.current.reset()}
              >
                Cancelar
              </Button>
            </FieldButtons>
          </Form>
          

          <h2>Publicações</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome da Publicação</th>
                <th>Data</th>
                <th>Visualizações</th>
                <th>Excluir</th>
              </tr>
            </thead>

            <tbody>
              {listaPublicacoes.map(publicacao => (
                <tr key={publicacao.id}>
                  <td>{publicacao.id}</td>
                  <td>{publicacao.titulo_publicacao}</td>
                  <td>{publicacao.data_publicacao}</td>
                  <td>{publicacao.visualizacoes}</td>
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