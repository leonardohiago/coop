import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, ButtonToggleMenu } from './styles';

const MenuDashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <Container showMenu={toggleMenu}>
      <ButtonToggleMenu onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? 
          (<MdChevronLeft size={24} />) : 
          (<MdChevronRight size={24} />)
        }
      </ButtonToggleMenu>

      <NavLink to="/dashboard/" exact activeClassName="nav__link--active">
        Início
      </NavLink>
      <NavLink to="/dashboard/publicacoes" activeClassName="nav__link--active">
        Publicações
      </NavLink>
      <NavLink to="/dashboard/itens-de-doacoes" activeClassName="nav__link--active">
        Itens de Doações
      </NavLink>
      <NavLink to="/dashboard/dados-da-ong" activeClassName="nav__link--active">
        Dados da ONG
      </NavLink>
    </Container>
  );
}

export default MenuDashboard;