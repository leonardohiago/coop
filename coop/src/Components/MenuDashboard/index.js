import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const MenuDashboard = () => (
  <Container>
      <NavLink to="/dashboard/" activeClassName="nav__link--active">
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

export default MenuDashboard;