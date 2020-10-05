import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 860px;
`;

export const CardOng = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 5px;
  }

  p {
    width: 326px;
    height: 56px;
    font-size: 12px;
    line-height: 14px;

    color: var(--cinza-escuro);
  }
`;

export const ListLastActions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    margin: 0 0 20px 26px;
    width: 50%;
  }
`;
