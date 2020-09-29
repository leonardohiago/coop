import React, { useState } from 'react';

import { Container, Filtro, Mapa, AvisoSelecioneCidade } from './styles';
import mapImg from '../../assets/map_example.png';

const Map = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(false);

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
        <img src={mapImg} alt="Mapa"/>

        {!cidadeSelecionada && (
          <AvisoSelecioneCidade>
            <span>Selecione uma cidade</span>
          </AvisoSelecioneCidade>
        )}
      </Mapa>
    </Container>
  );
}

export default Map;