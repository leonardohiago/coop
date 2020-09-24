import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/coop-logo.png';
import Button from '../../Components/Button';
import { Container, Content, Login } from './styles';

const Header = () => {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Coop."/>

                <nav>
                    <NavLink to="/" activeClassName="nav__link--active">
                        Início
                    </NavLink>
                    <NavLink to="/quem-somos" activeClassName="nav__link--active">
                        Quem somos
                    </NavLink>
                    <NavLink to="/como-funciona" activeClassName="nav__link--active">
                        Como funciona
                    </NavLink>
                    <NavLink to="/responsaveis" activeClassName="nav__link--active">
                        Responsáveis
                    </NavLink>
                </nav>

                <Login>
                    <NavLink to="/login" activeClassName="nav__link--active">
                        Login
                    </NavLink>

                    <Button background="var(--roxo)" backgroundHover="var(--verde)">
                        Cadastre sua ONG
                    </Button>
                </Login>
            </Content>
        </Container>
    )
}

export default Header;