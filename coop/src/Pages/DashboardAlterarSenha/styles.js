import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 32px 48px;
`;

export const FieldGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Field = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label span {
    color: var(--roxo);
    font-weight: 700;
  }
`;

export const Form = styled(Unform)`
  input {
    margin: 8px 0;
    padding: 16px 24px;
    width: 320px;
    height:35px;
    background: var(--cinza-claro);
    border-radius: 10px;
    border: none;
  }

  input.input-erro {
      border: solid 4px var(--vermelho);
  }

  .box-button {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }
`;
