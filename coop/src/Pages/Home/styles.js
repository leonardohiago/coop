import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

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

  .botao_lado_esquerdo{
    margin-left: auto;
  }

  section {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 30px;
    
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

    width:400px;
    height:550px;

  }


`;
