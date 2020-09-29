import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 8px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

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