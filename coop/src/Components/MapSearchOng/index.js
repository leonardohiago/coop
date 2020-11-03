import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react'

import { Container, Filtro, Mapa, AvisoSelecioneCidade } from './styles';

const MapSearchOng = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(true);
  const [localUsuario, setLocalUsuario] = useState({
      lat: -13.7026315,
      lng: -69.688677,
    });
  const [zoomLevel, setZoomLevel] = useState(2);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      setLocalUsuario({
        lat: lat,
        lng: lng
      });

      setZoomLevel(14);
    });
  }, []);

  return (
    <Container>
      <h2>Encontre ONGs perto de você</h2>
      
      <Filtro>
        <select>
          <option value="">UF</option>
          <option value="SC">SC</option>
        </select>

        <select>
          <option value="">Cidade</option>
          <option value="SC">Camboriú</option>
        </select>
      </Filtro>

      <Mapa>
        {!cidadeSelecionada && (
          <AvisoSelecioneCidade>
            <span>Selecione uma cidade</span>
          </AvisoSelecioneCidade>
        )}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'INSIRA AQUI A API KEY' }}
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