import React, { useCallback, useState, memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import api from "../../services/api";
import { validarTamanhoArquivo, validarExtensaoArquivo } from '../../utils';

import { Container, Avatar, InputChangeAvatar, ButtonToggleMenu } from './styles';

const MenuDashboard = () => {
  const { id } = useAuth();
  const { addToast } = useToast();
  const [ong, setOng] = useState({});
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    api.get(`/ongs/ong/${id}`).then(response => {
      setOng(response.data);
    })
  }, [id])
  
  const handleAvatarChange = useCallback((e) => {
      if (e.target.files) {
        const file = e.target.files[0];

        if(!validarExtensaoArquivo(file)) {
    
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'A logo deve ter extensão JPG ou PNG',
          });

          e.target.value = '';
        } else if(!validarTamanhoArquivo(file)) {
    
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'A logo não pode ter mais do que 2MB',
          });

          e.target.value = '';
        } else {
          const data = new FormData();

          data.append('file', e.target.files[0]);

          api.put(`/ongs/logo/${id}`, data).then((response) => {
            setOng({...ong, logo: response.data});
            
            addToast({
              type: 'success',
              title: 'Logo atualizada com sucesso!',
            });
          });
        }        
      }
    },
    [addToast, id, ong],
  );

  return (
    <Container showMenu={toggleMenu}>
      <Avatar>
        {ong.logo ? (
          <img 
            src={ong.logo} 
            alt={ong.nome_ong}
          />
        ) : 
          ong.nome_ong && (
            <img 
              src={`https://ui-avatars.com/api/?name=${ong.nome_ong.replaceAll(' ', '+')}&size=80&background=ffffff`} 
              alt={ong.nome_ong}
            />
          )
        }
      </Avatar>

      <InputChangeAvatar htmlFor="avatar" title="Alterar logo">
        <FiCamera />
        <input type="file" id="avatar" onChange={handleAvatarChange} />
      </InputChangeAvatar>

      <NavLink to="/dashboard/" exact activeClassName="nav__link--active">
        Doações
      </NavLink>
      <NavLink to="/dashboard/itens-de-doacoes" activeClassName="nav__link--active">
        Itens de doações
      </NavLink>
      <NavLink to="/dashboard/publicacoes" activeClassName="nav__link--active">
        Publicações
      </NavLink>
      <NavLink to="/dashboard/fotos" activeClassName="nav__link--active">
        Fotos da ONG
      </NavLink>
      <NavLink to="/dashboard/dados-da-ong" activeClassName="nav__link--active">
        Dados da ONG
      </NavLink>
      <NavLink to="/dashboard/alterar-senha" activeClassName="nav__link--active">
        Alterar senha
      </NavLink>

      <ButtonToggleMenu onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? 
          (<MdChevronLeft size={24} />) : 
          (<MdChevronRight size={24} />)
        }
      </ButtonToggleMenu>
    </Container>
  );
}

export default memo(MenuDashboard);