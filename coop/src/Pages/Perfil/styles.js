import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 860px;

  div.banner-ong {
    margin-bottom: 80px;
    width: 100%;
    height: 600px;
    /* overflow: hidden; */
  }

  .banner {
    border-radius: 20px;
    height: 600px;
    width: 100%;
    object-fit: cover;
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
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
    width: 860px;
  }

  p.informacoes-ong {
    margin: 5px 0 18px;
  }

  Button {
    font-size: 12px;
    height: 28px;
    margin-top: 18px;
    width: 112px;
  }

  #btnVerMaisPub {
    margin: 16px auto;
    width: 180px;
  }
`;

export const CardOng = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 5px;
  }

  h4 {
    width: 326px;
    color: var(--cinza-escuro);
    margin-bottom: 5px;
  }

  p {
    width: 326px;
    font-size: 12px;
    line-height: 14px;

    color: var(--cinza-escuro);
  }

  @media (max-width: 795px) {
    margin: 0 auto;
    width: auto;
  }
  @media (max-width: 450px) {
    width: 320px;
    .informacoes-ong {
      width: 300px;
    }
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

  div {
    margin-bottom: 16px;
  }

  @media (max-width: 795px) {
    margin: 20px auto 0;
  }

  @media (max-width: 450px) {
    width: 320px;
  }
`;

