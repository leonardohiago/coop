import React, { useCallback, useEffect, useState } from 'react';
import { FiCamera } from 'react-icons/fi';

import { Container, Foto, BoxButtons, InputAddFoto } from './styles';

import api from "../../services/api";
import { useToast } from '../../hooks/toast';
import { validarTamanhoArquivo, validarExtensaoArquivo } from '../../utils';

const UploaderFoto = ({ indice, url, idOng }) => {
  const { addToast } = useToast();
  const [urlFoto, setUrlFoto] = useState(null);

  useEffect(() => {
    setUrlFoto(url);
  }, [url]);

  const handleAddFoto = useCallback((e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if(!validarExtensaoArquivo(file)) {
  
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'A foto deve ter extensão JPG ou PNG',
        });
      } else if(!validarTamanhoArquivo(file)) {
  
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'A foto não pode ter mais do que 2MB',
        });
      } else {
        const data = new FormData();
    
        data.append('foto', e.target.files[0]);
    
        api.put(`/ongs/foto/${idOng}/${indice}`, data).then((response) => {
          setUrlFoto(response.data);

          addToast({
            type: 'success',
            title: 'Foto adicionada com sucesso!',
          });
        });
      }
    }
  },
  [addToast, idOng, indice],
  );

  return (
    <Container>
      <Foto>
        {urlFoto ? (
          <img src={urlFoto ? urlFoto : ''} alt={`Imagem de número ${indice}`} />
          ) : (
          <h3>Adicione uma foto</h3>
        )}
      </Foto>

      <BoxButtons>
        <InputAddFoto htmlFor={`foto${indice}`} title="Alterar logo">
          <FiCamera />
          <input type="file" id={`foto${indice}`} onChange={handleAddFoto} />
        </InputAddFoto>
      </BoxButtons>
    </Container>
  );
}
export default UploaderFoto;