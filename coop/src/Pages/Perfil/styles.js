import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 860px;

  div.banner-ong {
    margin-top: 30px;
  }

  img.logo-ong {
    border: 5px solid #F2F2F2;
    border-radius: 27px;
    height: 100px;
    position: relative;
    right: -50px;
    top: -50px;
    width: 100px;
  }

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    width: 860px;
  }

  p.informacoes-ong {
    margin-top: 5px;
  }

  Button {
    font-size: 12px;
    height: 20px;
    margin-top: 18px;
    width: 112px;
  }

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
  width: 440px;

  h2 {
    margin: 0 0 20px 26px;
    width: 50%;
  }
`;

