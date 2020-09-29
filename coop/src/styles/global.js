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
`;
