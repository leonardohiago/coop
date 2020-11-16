/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useCallback } from 'react';
import GoogleMapReact from 'google-map-react'
import { AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'
import { MdMail } from 'react-icons/md';

import api from '../../services/api';

import { Container, Filtro, Mapa, OngPin, ContentPin, AvatarPin, ResumoOngPin } from './styles';

import Button from '../Button';

const MapSearchOng = ({listarUltimasOngsUf, listarUltimasOngsCidade}) => {
  const [listaEstados, setListaEstados] = useState([]);
  const [listaCidades, setListaCidades] = useState([]);
  const [ufSelecionada, setUfSelecionada] = useState('');
  const [ongsCidade, setOngsCidade] = useState([]);
  const [localUsuario, setLocalUsuario] = useState({
      lat: -13.7026315,
      lng: -69.688677,
    });
  const [zoomLevel, setZoomLevel] = useState(2);

  useEffect(() => {
    // Pega localização do usuário
    navigator.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      setLocalUsuario({
        lat: lat,
        lng: lng
      });

      setZoomLevel(14);
    });

    // Pega estados que tem ONGs cadastradas
    api.get(`/enderecos/uf`).then((response) => {
      let ufs = [];

      response.data.forEach(uf => {
        ufs.push(uf);
      });

      setListaEstados(ufs);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Carrega cidades do estado selecionado
  useEffect(() => {
    if(ufSelecionada !== '') {
      let cidades = [];
  
      api.get(`/enderecos/cidades/${ufSelecionada}`).then(response => {
        response.data.forEach(cidade => {
          cidades.push(cidade);
        });
  
        setListaCidades(cidades);
      });

      listarUltimasOngsUf(ufSelecionada);
    }
  }, [listarUltimasOngsUf, ufSelecionada]);

  // Busca ONGs da cidade seleciona
  const handleCidadeSelecionada = useCallback(async (cidade) => {
    const response = await api.get(`/ongs/${ufSelecionada}/${cidade}`);

    setOngsCidade(response.data.ongs);

    listarUltimasOngsCidade(cidade);
  }, [listarUltimasOngsCidade, ufSelecionada])

  const handleClickColaborar = (id) => {
    console.log(id);
  }

  return (
    <Container>
      <h2>Encontre ONGs perto de você</h2>
      
      <Filtro>
        <select onChange={(e) => setUfSelecionada(e.target.value)}>
          <option value="">UF</option>
          {listaEstados.map(uf => (
            <option value={uf} key={uf}>{uf}</option>
          ))}
        </select>

        <select onChange={(e) => handleCidadeSelecionada(e.target.value)}>
          {(ufSelecionada === '') ? (
            <option value="">Selecione UF</option>
          ) : (
            <option value="">Selecione Cidade</option>
          )}

          {(ufSelecionada !== '') && (
            listaCidades.map(cidade => (
              <option value={cidade} key={cidade}>{cidade}</option>
            ))
          )}
        </select>
      </Filtro>

      <Mapa>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={localUsuario}
          defaultZoom={zoomLevel}
          center={localUsuario}
          zoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
        >
          {ongsCidade && (
            ongsCidade.map(ong => (
              <OngPin
                key={ong.id}
                lat={ong.latitude}
                lng={ong.longitude}
              >
                <ContentPin>
                  <AvatarPin>
                    <img 
                      src={`https://ui-avatars.com/api/?name=${ong.nome_ong.replaceAll(' ', '+')}&size=50&background=ffffff`} 
                      alt={ong.nome_ong}
                    />
                  </AvatarPin>

                  <ResumoOngPin id="resumo-ong-pin">
                    <h2>{ong.nome_ong}</h2>

                    <div className="contato-pin">
                      <a href={`mailto:${ong.email}`}><MdMail /></a>
                      {
                        ong.whatsapp_ong && (
                          <a href={`https://api.whatsapp.com/send?phone=55${ong.whatsapp_ong}&text=&source=&data=&app_absent=`} target="_blank"><FaWhatsapp /></a>
                        )
                      }
                      {
                        ong.facebook_ong && (
                          <a href={ong.facebook_ong} target="_blank"><AiFillFacebook /></a>
                        )
                      }
                      {
                        ong.instagram_ong && (
                          <a href={ong.instagram_ong} target="_blank"><AiOutlineInstagram /></a>
                        )
                      }
                    </div>

                    <Button background="var(--verde)" backgroundHover="var(--roxo)" onClick={() => handleClickColaborar(ong.id)}>
                      Colaborar
                    </Button>
                  </ResumoOngPin>
                </ContentPin>
              </OngPin>
            ))
          )}
        </GoogleMapReact>
      </Mapa>

    </Container>
  );
}

export default MapSearchOng;