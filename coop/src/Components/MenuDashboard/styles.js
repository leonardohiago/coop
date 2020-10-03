import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  min-height: calc(100vh - 174px);
  padding-top: 48px;
  background: var(--cinza-claro);
  display: flex;
  flex-direction: column;

  a {
    padding: 12px 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--preto);
    text-decoration: none;
    text-indent: 56px;
    transition: all 0.3s;

    &:hover {
      background: var(--cinza);
    }

    &.nav__link--active {
      color: #fff;
      background: var(--roxo);
    }
  }
`;