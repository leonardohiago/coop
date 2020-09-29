import styled from 'styled-components';

const coresNiveisNecessidades = {
  baixa: '#FDD660',
  media: '#6D3632',
  alta: '#FD6060',
}

export const Container = styled.div`
  width: 100%;
  min-width: 480px;
  border: solid 2px var(--roxo);
  border-radius: 10px;

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

    button {
      max-width: 90px;
      margin-left: auto;
      height: 24px;
      font-size: 12px;
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
`;

export const Contato = styled.div`
  svg {
    margin-left: 4px;
    fill: var(--roxo);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      fill: var(--verde);
    }
  }
`;

export const LabelNecessidade = styled.div`
  padding: 4px 8px;
  background: var(--cinza-claro);
  border-radius: 16px;
  display: flex;
  align-items: center;

  & + & {
    margin-left: 8px;
  }

  span {
    margin-left: 2px;
    font-size: 10px;
    font-weight: 700;
    color: var(--roxo);
  }

  svg {
    fill: ${props => coresNiveisNecessidades[props.necessidade]};
  }
`;