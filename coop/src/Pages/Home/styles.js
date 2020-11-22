import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

a{
  font-weight: bold;
  color:#5B25B1;
  text-decoration: none;
}

a:hover{
  color:#18B087;
}

.nomes{
  background: none;
  border: 0px;
}

  img {
    width:400px;
    height:360px;
    display: block;
    margin:20px;
  }

  .imagem1 {
    img {
      width: 406px;
      height: 406px;
    }
  }

  .botao_lado_esquerdo{
    margin-left: auto;
  }

  section {
    display: flex;
    align-items: center;
    max-width: 856px;
    margin: 0 auto;
    height: 100vh;
  }

  .titulo_lado_esquerdo {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    text-align: right;
    color: #1c1c1c;
    margin-bottom: 15px;
  }

  .texto_lado_esquerdo {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #888888;
    margin-bottom: 30px;
  }

  .titulo_lado_direito {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    color: #1c1c1c;
    margin-bottom: 15px;
  }

  .texto_lado_direito {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #888888;
    margin-bottom: 30px;
  }

  .equipe{
    height: 550px;
  }

  @media(max-width: 700px){
      img{
        width:50vw;
        height:50vw;
        display: flex;

      }

      section{
        width: 300px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;

      }

      .titulo_lado_direito, .titulo_lado_esquerdo{
        margin-left: auto;
        margin-right: auto;
        width: 9em;
      }

      .equipe{
        height: auto;
      }

      .responsaveis {
        width: 100%;
      }
  }
`;
