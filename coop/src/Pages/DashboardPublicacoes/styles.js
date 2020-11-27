import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 32px 48px;

  table {
    min-width: 656px;
    margin-top: 24px;
  }
`;

export const StatusDoacoes = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxStatus = styled.div`
  min-width: 192px;
  min-height: 152px;
  margin-bottom: 40px;
  padding: 28px 20px;
  border-radius: 25px;
  background: var(--cinza-claro);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s;
  cursor: pointer;

  & + & {
    margin-left: 40px;
  }

  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  }

  span {
    font-weight: bold;
    font-size: 64px;
    color: ${props => `var(--${props.color})`};
    line-height: 1em;
  }

  p {
    font-size: 14px;
    line-height: 1em;
  }
`;

export const Field = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 656px;
`;

export const Input = styled.input`
  flex: 1;
  height: 70px;

  background: #F9F9F9;
  border-radius: 10px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
`;

export const Form = styled.div`
  padding: 10px 0;
  width: 625px;
  background: #FFF;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;

`;

export const FieldButtons = styled.div`
  flex: 1;
  
  display: flex;
  margin-bottom: 24px;
  width: 656px;
`;

export const SubmitButton = styled.button`
    width: 240px;
    height: 48px;
    background: #18B087;
    border-radius: 30px;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    margin-right: 40px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: #159270;
    }
`;

export const CancelButton = styled.button`
    width: 240px;
    height: 48px;
    background: var(--cinza-claro);
    border-radius: 30px;
    color: #FD6060;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }
`;

export const BoxConfirmarExclusao = styled.div`
  padding: 40px;
  border: solid 4px var(--vermelho);
  border-radius: 16px;
  background: var(--cinza-claro);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.65);

  div {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

export const ButtonExcluir = styled.button`
  font-size: 20px;
  background: none;
  border: none;

  svg {
    transition: all 0.3s;
  }

  &:hover svg {
    color: var(--vermelho);
  }
`;