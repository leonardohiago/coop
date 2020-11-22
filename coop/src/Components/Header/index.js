import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/coop-logo.png';
import Button from '../Button';
import { Container, Content, Login } from './styles';
import { useAuth } from '../../hooks/auth';
import { FaDesktop, FaSignOutAlt } from 'react-icons/fa';

const HeaderHome = ({children}) => {
    const history = useHistory();
    const { email, signOut } = useAuth();

    return (
        <Container isDashboard={history.location.pathname === '/dashboard'}>
            <Content logado={email}>
                <img src={logo} alt="Coop." onClick={() => history.push('/')}/>

                {children}

                <Login>
                    {email ? (
                        <>
                            {history.location.pathname !== '/dashboard' && (
                                <NavLink to="/dashboard" activeClassName="nav__link--active">
                                    <FaDesktop />
                                </NavLink>
                            )}
                            <NavLink to="/" onClick={signOut}>
                                <FaSignOutAlt />
                            </NavLink>
                        </>
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

export default HeaderHome;