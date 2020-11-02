import styled from 'styled-components';

const coresNiveisNecessidades = {
  baixa: '#FDD660',
  media: '#6D3632',
  alta: '#FD6060',
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

@media screen and (max-width:480px) {
  margin: 0 8px;
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