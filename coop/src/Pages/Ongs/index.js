import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

import { Container, Loading, ListLastOngs, ListLastActions, Paginacao, PaginacaoItem } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxOngResumo from '../../Components/BoxOngResumo';
import MapSearchOng from '../../Components/MapSearchOng';
import BoxOngLastAction from '../../Components/BoxOngLastAction';
import Button from '../../Components/Button';

import loading from '../../assets/loading.gif';

const Home = () => {
  const [ultimasOngs, setUltimasOngs] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [ufSelecionada, setUfSelecionada] = useState('');
  const [paginacaoOngs, setPaginacaoOngs] = useState({});
  const [loadingOngs, setLoadingOngs] = useState(false);
  const [publicacoes, setPublicacoes] = useState([]);
  const [paginacaoPublicacoes, setPaginacaoPublicoes] = useState(0);
  const [carregandoPublicacoes, setCarregandoPublicacoes] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    /**
     * Carrega últimas ONGs cadastradas
     */
    setLoadingOngs(true);

    api.get(`/ongs?pagina=0&quantidade=4`).then(response => {
      setPaginacaoOngs({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });
      setUltimasOngs(response.data.ongs);
      setLoadingOngs(false);
    });

    /**
     * Carrega publicações
     */
    setCarregandoPublicacoes(true);

    api.get('/publicacao?pagina=0&quantidade=2').then(response => {
      setPublicacoes(response.data.publicacoes);
      setPaginacaoPublicoes({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });

      setCarregandoPublicacoes(false);
    });
  }, []);

  const listarUltimasOngsUf = useCallback((uf, pagina = 0) => {
    setLoadingOngs(true);

    api.get(`/ongs/${uf}?pagina=${pagina}&quantidade=4`).then(response => {
      setUltimasOngs(response.data.ongs);
      setUfSelecionada(uf);
      setPaginacaoOngs({
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
      setPaginacaoOngs({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });
      setLoadingOngs(false);
    });
  }, [ufSelecionada]);

  function handleClickPaginaItemOngs(pagina) {
    if(cidadeSelecionada) {
      listarUltimasOngsCidade(cidadeSelecionada, pagina);
    } else {
      listarUltimasOngsUf(ufSelecionada, pagina);
    }
  }

  function getPaginacaoOngs() {
    const pages = [];

    for(let i = 0; i < paginacaoOngs.totalPaginas; i++) {
      if(paginacaoOngs.paginaAtual !== i) {
        pages.push(<PaginacaoItem key={i} onClick={() => handleClickPaginaItemOngs(i)} />)
      } else {
        pages.push(<PaginacaoItem key={i} atual />)
      }
    }

    return pages;
  }

  function handleVerMaisPublicacoes() {
    setCarregandoPublicacoes(true);

    api.get(`/publicacao?pagina=${paginacaoPublicacoes.paginaAtual + 1}&quantidade=2`).then(response => {
      setPublicacoes([...publicacoes, ...response.data.publicacoes]);
  
      setPaginacaoPublicoes({
        paginaAtual: response.data.paginaAtual,
        totalPaginas: response.data.totalPaginas
      });

      setCarregandoPublicacoes(false);
    });
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
              ultimasOngs.length > 0 ? 
                ultimasOngs.map(ong => (
                  <BoxOngResumo ong={ong} key={ong.id} />
                )) : (
                  <h2>Nenhuma ONG foi encontrada!</h2>
                )
            ) : (
              <Loading>
                <img src={loading} alt="Carregando dados das ONGs"/>
              </Loading>
            )
          }

          <Paginacao>
            {getPaginacaoOngs()}
          </Paginacao>
        </ListLastOngs>
          
        <MapSearchOng 
          listarUltimasOngsUf={listarUltimasOngsUf} 
          listarUltimasOngsCidade={listarUltimasOngsCidade} 
        />

        <ListLastActions>
          <h2>Ações Realizadas</h2>

          { publicacoes.length > 0 ?
              publicacoes.map(publicacao => (
                <BoxOngLastAction
                  key={publicacao.id}
                  publicacao={publicacao}
                  ong={publicacao.fkOng}
                />
              )) : (
                <h2>Nenhuma publicação foi encontrada!</h2>
              )
          }

        {(paginacaoPublicacoes.paginaAtual < paginacaoPublicacoes.totalPaginas - 1) && <Button background="var(--verde)" backgroundHover="var(--roxo)" onClick={handleVerMaisPublicacoes}>
          {carregandoPublicacoes ? 'Carregando...' : 'Ver mais publicações'}
        </Button>}
        </ListLastActions>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
