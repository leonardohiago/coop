import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react'

import api from '../../services/api';

import { Container, Filtro, Mapa } from './styles';

const MapSearchOng = () => {
  const [listaEstados, setListaEstados] = useState([]);
  const [listaCidades, setListaCidades] = useState([]);
  const [ufSelecionada, setUfSelecionada] = useState('');
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
    }
  }, [ufSelecionada]);

  const handleCidadeSelecionada = (cidade) => {
    api.get(`/ongs/${ufSelecionada}/${cidade}`).then(response => {
      response.data.forEach(ongs => {
        console.log(ongs);
      });
    });
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
        >
        </GoogleMapReact>
      </Mapa>

    </Container>
  );
}

export default MapSearchOng;