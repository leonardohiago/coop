import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  .contagem {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dados {
    margin: 35px;
    margin-left: 100px;
    background: #f9f9f9;
    border-radius: 25px;
  }

  .cor-recebidas{
    color:#18b087;
  }

  .cor-pendentes{
    color:#fdd660;
  }

  .cor-canceladas{
    color:#fd6060;
  }

  #estilizacao {

    font-weight: bold;
    font-size: 64px;
    margin-top: 46px;
    margin-left: 12px;
    margin-right: 96px;
  }

  #estilizacao_texto {

    font-size: 14px;
    line-height: 16px;
    margin-top: -6px;
    margin-bottom: 22px;
    margin-right: 50px;
    margin-left: 19px;
  }

  .texto-principal {
   
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    color: #000000;
    margin-left: 100px;
    margin-bottom: 30px;
  }

  .itens {
    max-width: 930px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
  }

  .quadrado {
    margin-left: 70px;
    margin-bottom: 60px;
    width: 160px;
    height: 160px;
    background: #5b25b1;
    border-radius: 20px;
  }

  #especial {
    border: 5px solid #fdd660;
  }

  .botoes {
    display: flex;
    flex-wrap: wrap;
  }

  .botao-publicar {
    margin-left: 100px;
    margin-bottom: 80px;
    width: 200px;
    font-size: 17px;
  }

  .botao-cancelar {
    margin-left: 60px;
    margin-bottom: 80px;
    width: 200px;
    color: var(--vermelho);
    font-size: 17px;
  }
`;

export const Content = styled.main``;
