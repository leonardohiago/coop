import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

import { Container, Loading, ListLastOngs, ListLastActions, Paginacao, PaginacaoItem } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxOngResumo from '../../Components/BoxOngResumo';
import MapSearchOng from '../../Components/MapSearchOng';
import BoxOngLastAction from '../../Components/BoxOngLastAction';

import loading from '../../assets/loading.gif';

const Home = () => {
  const [ultimasOngs, setUltimasOngs] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [ufSelecionada, setUfSelecionada] = useState('');
  const [paginacao, setPaginacao] = useState({});
  const [loadingOngs, setLoadingOngs] = useState(false);
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    /**
     * Carrega últimas ONGs cadastradas
     */
    setLoadingOngs(true);

    api.get(`/ongs?pagina=0&quantidade=4`).then(response => {
      setLoadingOngs(false);
      setUltimasOngs(response.data.ongs);
    });

    /**
     * Carrega publicações
     */
    api.get('/publicacao').then(response => {
      setPublicacoes(response.data);
      console.log(response.data);
    });
  }, []);

  const listarUltimasOngsUf = useCallback((uf, pagina = 0) => {
    setLoadingOngs(true);

    api.get(`/ongs/${uf}?pagina=${pagina}&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
      setUfSelecionada(uf);
      setPaginacao({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });
      setLoadingOngs(false);
    });
  }, []);

  const listarUltimasOngsCidade = useCallback((cidade, pagina = 0) => {
    setLoadingOngs(true);

    api.get(`/ongs/${ufSelecionada}/${cidade}?pagina=${pagina}&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
      setCidadeSelecionada(cidade);
      setPaginacao({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });
      setLoadingOngs(false);
    });
  }, [ufSelecionada]);

  function handleClickPaginaItem(pagina) {
    if(cidadeSelecionada) {
      listarUltimasOngsCidade(cidadeSelecionada, pagina);
    } else {
      listarUltimasOngsUf(ufSelecionada, pagina);
    }
  }

  function getPaginacao() {
    const pages = [];

    for(let i = 0; i < paginacao.totalPaginas; i++) {
      if(paginacao.paginaAtual !== i) {
        pages.push(<PaginacaoItem key={i} onClick={() => handleClickPaginaItem(i)} />)
      } else {
        pages.push(<PaginacaoItem key={i} atual />)
      }
    }

    return pages;
  }

  return (
    <>
      <Header />

      <Container>
        <ListLastOngs>
          {ufSelecionada === '' && cidadeSelecionada === ''
            ? <h2>Últimas ONGs cadastradas</h2>
            : cidadeSelecionada === ''
              ? <h2>Últimas ONGs cadastradas em {ufSelecionada}</h2>
              : <h2>Últimas ONGs cadastradas em {cidadeSelecionada}/{ufSelecionada}</h2>
          }

          {!loadingOngs
            ? (
              ultimasOngs.map(ong => (
                <BoxOngResumo ong={ong} key={ong.id} />
              ))
            ) : (
              <Loading>
                <img src={loading} alt="Carregando dados das ONGs"/>
              </Loading>
            )
          }
          {(ufSelecionada !== '' || cidadeSelecionada !== '') && (
            <Paginacao>
              {getPaginacao()}
            </Paginacao>
          )}
        </ListLastOngs>
          
        <MapSearchOng 
          listarUltimasOngsUf={listarUltimasOngsUf} 
          listarUltimasOngsCidade={listarUltimasOngsCidade} 
        />

        <ListLastActions>
          <h2>Ações Realizadas</h2>

          {publicacoes.map(publicacao => (
            <BoxOngLastAction
              key={publicacao.id}
              publicacao={publicacao}
            />
          ))}
        </ListLastActions>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
