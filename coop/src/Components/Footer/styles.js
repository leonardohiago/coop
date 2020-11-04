import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 16px 0;
  background: var(--roxo);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RedesSociais = styled.div`
  svg {
    color: #fff;
    margin-right: 8px;
  }
  a {
    text-decoration: none;
  }
  svg:hover {
    color: var(--verde);
  }
`;