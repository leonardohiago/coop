import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 480px;
  border: solid 2px var(--roxo);
  border-radius: 10px;

  @media screen and (max-width:480px) {
    min-width: 100%;
  }

  & + & {
    margin-top: 12px;
  }

  header {
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
  }

  hr {
    height: 2px;
    background: var(--cinza);
    border: none;
  }

  footer {
    padding: 14px 12px;
    display: flex;

    @media screen and (max-width:480px) {
      flex-wrap: wrap;
    }

    button {
      max-width: 90px;
      margin-left: auto;
      height: 24px;
      font-size: 12px;

      @media screen and (max-width:480px) {
        width: 100%;
        max-width: 100%;
        margin-top: 8px;
      }
    }
  }
`;

export const InfoOng = styled.div`
  h3 {
    margin-bottom: 2px;
    font-size: 13px;
    font-weight: 700;
    color: var(--roxo);
  }

  h4 {
    font-size: 10px;
    font-weight: 400;
    color: var(--cinza-escuro);
  }

  a {
    text-decoration: none;
  }
`;

export const Contato = styled.div`
  svg {
    margin-right: 4px;
    fill: var(--roxo);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      fill: var(--verde);
    }
  }
`;