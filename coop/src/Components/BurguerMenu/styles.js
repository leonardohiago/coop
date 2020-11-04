import styled from 'styled-components';

/* TODO: SANDUICHE EM 790PX */

export const Container = styled.header`
  padding: 8px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  background: #fff;
  z-index: 10;

  width: 250px;
  height: auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  /* max-width: 1024px; */
  max-width: ${props => props.logado === true ? '100%' : '250px'};
  margin: 0 auto;
  padding: ${props => props.logado === true ? '0 80px ' : '0 0 0 0'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img { cursor: pointer; }

  nav {
    flex-direction: column;
    display: flex;
    align-items: center;
    height: 30vh;
    justify-content: space-around;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: var(--preto);

    &:hover {
      color: var(--roxo);
    }
  }

  .nav__link--active {
    font-weight: 700;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15vh;
  justify-content: space-around;
  
  a {
    font-weight: 700;
  }
`;