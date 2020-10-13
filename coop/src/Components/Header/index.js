import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/coop-logo.png';
import Button from '../Button';
import { Container, Content, Login } from './styles';

const Header = ({logado, children}) => {
    return (
        <Container>
            <Content logado={logado}>
                <img src={logo} alt="Coop."/>

                {children}

                <Login>
                    {logado ? (
                        <NavLink to="/login" activeClassName="nav__link--active">
                            Sair
                        </NavLink>    
                    ) : (
                        <>
                            <NavLink to="/login" activeClassName="nav__link--active">
                                Login
                            </NavLink>

                            <Button background="var(--roxo)" backgroundHover="var(--verde)">
                                Cadastre sua ONG
                            </Button>
                        </>
                    )}
                </Login>
            </Content>
        </Container>
    )
}

export default Header;