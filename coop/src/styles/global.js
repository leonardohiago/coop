import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Cores */
    --verde: #18B087;
    --roxo: #5B25B1;
    --amarelo: #FDD660;
    --vermelho: #FD6060;
    --cinza: #ECECEC;
    --cinza-claro: #F9F9F9;
    --cinza-escuro: #858585;
    --preto: #1C1C1C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  input.input-erro {
    border: solid 2px var(--vermelho);
  }

  table {
    border-collapse: separate; 
    border-spacing: 0 8px;

    thead {
      th {
        padding: 0 16px;
        text-align: left;

        &:last-child {
          text-align: center;
        }
      }
    }
    
    tbody {
      tr {
        margin-bottom: 8px;

        &:hover {
          td {
            background: var(--cinza);
          }
        }

        td {
          padding: 16px;
          background: var(--cinza-claro);

          &:first-child {
            font-weight: 700;
            border-left-style: solid var(--cinza-claro);
            border-top-left-radius: 15px; 
            border-bottom-left-radius: 15px;
          }

          &:last-child {
            text-align: center;
            border-right-style: solid var(--cinza-claro);
            border-top-right-radius: 15px; 
            border-bottom-right-radius: 15px;
          }
        }
      }
    }
  }
`;
