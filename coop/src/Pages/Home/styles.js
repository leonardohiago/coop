import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 174px);
  align-items: center;
  display: flex;

  .quadro1 {
    background: red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foto1_quadro1 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 400px;
    background-image: url("./img/imagem1.jpg");
 }
  
  .foto2_quadro1 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 280px;

  }
  .texto1_quadro1 {
    position: absolute;
    width: 340px;
    height: 56px;
    left: 40px;
    top: 80px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
    text-align: right;
  
    color: #1c1c1c;
  }
  
  .texto2_quadro1 {
    position: absolute;
    width: 350px;
    height: 30px;
    left: 30px;
    top: 200px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
  
    color: #888888;
  }
  
  .botao1_quadro1 {
    position: absolute;
    height: 34px;
    width: 120px;
    right: 15px;
    top: 270px;
  
    background: #5b25b1;
    border-radius: 50px;
  }
  
  .texto3_quadro1 {
    position: absolute;
    height: 15px;
    left: 9px;
    top: calc(50% - 14px / 2);
  
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height */
  
    text-align: center;
    text-decoration:none;
    color: #ffffff;
  }

  .quadro2 {
    position: relative;
    /* width: 100vw; */
    height: 406px;
  
    top: -30px;
  
    background: #f9f9f9;
  }
  
  .foto1_quadro2 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 420px;

  }
  
  .foto2_quadro2 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 280px;
    background-image: url("./img/imagem2.jpg");
    background-size: 120%;
  }
  
  .texto1_quadro2 {
    position: relative;
    top: 100px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  
    color: #1c1c1c;
  }
  
  .texto2_quadro2 {
    position: relative;
    top: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
  
    color: #888888;
  }
  
  .botao1_quadro2 {
    position: relative;
    height: 34px;
    width: 120px;
    top: 140px;
    background: #5b25b1;
    border-radius: 50px;
  }
  
  .texto3_quadro2 {
    position: absolute;
    height: 15px;
    left: 9px;
    top: calc(50% - 14px / 2);
  
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    text-decoration: none;
  
    color: #ffffff;
  }

  .quadro3 {
    /* width: 100vw; */
    height: 100vh;
    margin-top: 140px;
    margin-bottom: 40px;
  }
  
  .foto1_quadro3 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 400px;
  
    background-image: url("./img/imagem3.jpg");
  }
  
  .foto2_quadro3 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 280px;
  }
  .texto1_quadro3 {
    position: absolute;
    width: 340px;
    height: 56px;
    left: 40px;
    top: 110px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: right;
  
    color: #1c1c1c;
  }
  
  .texto2_quadro3 {
    position: absolute;
    width: 350px;
    height: 30px;
    left: 30px;
    top: 180px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
  
    color: #888888;
  }
  
  .botao1_quadro3 {
    position: absolute;
    height: 34px;
    width: 120px;
    right: 15px;
    top: 300px;
  
    background: #5b25b1;
    border-radius: 50px;
  }
  
  .texto3_quadro3 {
    position: absolute;
    height: 15px;
    left: 9px;
    top: calc(50% - 14px / 2);
  
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height */
  
    text-align: center;
    text-decoration:none;
    color: #ffffff;
  }

  .quadro4 {
    position: relative;
    /* width: 100vw; */
    height: 100vh;
    left: -1px;
    top:10px;

  
    background: #f9f9f9;
  }
  .foto1_quadro4 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 400px;
  }
  
  .foto2_quadro4 {
    position: absolute;
    width: 406px;
    height: 406px;
    left: 280px;
  }
  
  .circuloG1 {
    position: absolute;
    width: 203px;
    height: 150px;
    top: 70px;
    left: 150px;
    border-radius: 100%;
    background: #e0deff;
    z-index: 5;
  }
  
  .circuloG2 {
    position: absolute;
    width: 203px;
    height: 150px;
    top: 180px;
    left: 150px;
    border-radius: 100%;
    background: #e0deff;
    z-index: 5;
  }
  
  .circuloG3 {
    position: absolute;
    width: 203px;
    height: 200px;
    top: 50px;
    left: 20px;
    border-radius: 100%;
    background: #e0deff;
    z-index: 5;
  }
  
  .circuloG4 {
    position: absolute;
    width: 203px;
    height: 200px;
    top: 180px;
    left: 20px;
    border-radius: 100%;
    background: #e0deff;
    z-index: 5;
  }
  
  .circuloP1 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 230px;
    left: -30px;
    border-radius: 100%;
    background-image: url("./img/jussara.jpg");
    background-size: contain;
    z-index: 5;
  }
  
  .circuloP2 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 50px;
    left: -30px;
    border-radius: 100%;
    background-image: url("./img/leonardo.jpg");
    background-size: contain;
    z-index: 5;
  }
  
  .circuloP3 {
    position: absolute;
    z-index: 5;
    width: 150px;
    height: 150px;
    top: -30px;
    left: 170px;
    border-radius: 100%;
    background-image: url("./img/rayanne.jpg");
    background-size: contain;
  }
  
  .circuloP4 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 130px;
    left: 170px;
    border-radius: 100%;
    background-image: url("./img/samuel.jpg");
    background-size: contain;
    z-index: 5;
  }
  
  .circuloP5 {
    position: absolute;
    z-index: 5;
    width: 150px;
    height: 150px;
    top: 300px;
    left: 170px;
    border-radius: 100%;
    background-image: url("./img/Vinicius.jpg");
    background-size: contain;
  }
  
  .texto1_quadro4 {
    position: relative;
    top: 100px;
  
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  
    color: #1c1c1c;
  }
  
  .texto2_quadro4 {
    position: relative;
    top: 120px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
  
    color: #888888;
  }
  
  .botao1_quadro4 {
    position: relative;
    height: 34px;
    width: 120px;
    top: 140px;
    background: #5b25b1;
    border-radius: 50px;
  }
  
  .texto3_quadro4 {
    position: absolute;
    height: 15px;
    left: 9px;
    top: calc(50% - 14px / 2);
  
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height */
    
    text-align: center;
  
    color: #ffffff;
    text-decoration:none;
  }

  

  





`;

