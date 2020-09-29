import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1024px;
  margin: 56px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 28px;
    font-size: 24px;
    font-weight: 700;
    color: var(--preto);
    text-align: center;
  }
`;

export const ListLastOngs = styled.div`
  width: 100%;
  max-width: calc(100% - 400px - 40px); /* 400px do mapa e 40px da margem direita */
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListLastActions = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    width: 100%;
  }
`;