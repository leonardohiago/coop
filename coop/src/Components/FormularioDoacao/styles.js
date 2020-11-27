import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  input {
    margin: 8px 0;
    padding: 16px 24px;
    width: 320px;
    height: 46px;
    background: var(--cinza);
    border-radius: 10px;
    border: none;
  }

  input.input-erro {
      border: solid 4px var(--vermelho);
  }

  .row-1 {
    margin-top: 16px;
  }
`;
