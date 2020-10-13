import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/coop-logo.png';
import Button from '../Button';
import { Container, Content, Login } from './styles';

const Header = ({logado, children}) => {
    const history = useHistory();

    return (
        <Container>
            <Content logado={logado}>
                <img src={logo} alt="Coop." onClick={() => history.push('/')}/>

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

                            <Button 
                                onClick={() => history.push('/cadastrar-ong')}
                                background="var(--roxo)" 
                                backgroundHover="var(--verde)">
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