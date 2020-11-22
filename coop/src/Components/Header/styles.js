import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  top: 0;
  padding: 8px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  position: ${props => props.isDashboard ? 'relative' : 'fixed'};
  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  /* max-width: 1024px; */
  max-width: ${props => props.logado === true ? '100%' : '1024px'};
  margin: 0 auto;
  padding: ${props => props.logado === true ? '0 80px ' : '0 0 0 0'};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img { cursor: pointer; }

  a {
    font-size: 14px;
    text-decoration: none;
    color: var(--preto);

    &:hover {
      color: var(--roxo);
    }
  }

  a + a {
    margin-left: 24px;
  }

  .nav__link--active {
    font-weight: 700;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  
  a {
    margin-right: 24px;
    font-weight: 700;
  }

 
`;