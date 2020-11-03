import styled from "styled-components";

export const Section = styled.section`
    width: 70vw;
    display:flex;
    align-items: flex-start;
    flex-wrap: wrap;
    
    img{
        height: 54px;
        width: 132px;
        margin-bottom: 24px;  
    }

    div{
        display: flex;
        flex-wrap: wrap;
    }

    label{
        display: flex;
        flex-direction: column;
        width: 340px;
        heigth: 20px;
    }

    input[type="text"]{
        background: var(--cinza);
        border-style: none;
        width: 315px;
        height:46px;
        border-radius: 10px;
        padding: 16px 24px;
    }

    .p-1{
        color: #var(--preto);
        font-size: 30px;
        font-weight: 700;
        line-height: 31px;
        height: 60px;
        width: 300px;
    }
    
    .p-2{
        margin-bottom: 10px;
        margin-top: 10px;
    }
  
    

    .row-2{
        display: flex;
        padding-top: 10px;
    }
    
    .button-size{
        border-radius: 30px;
        width: 187px;
        height: 39px;
        margin:0 1.5em 0 0;   
        margin-top: 2px; 
    }

    .box-button{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 15vh;
        width: 40vw;
        margin-left: 100px;
        padding-bottom: 120px;
        margin-top: 15px;
    }
    
    .color-cancel{
        color: var(--vermelho);
    }   
}

`;

export const Aside = styled.aside`
    background-color: var(--roxo);
    height: 625px;
    width: 420px;
    display: flex;

    img{
        height: 600px;
        width: 400px;  
    }
}


`;

export const Container = styled.main`
  display: flex;
  width: 100%;

  form {
    padding: 20px;
    margin-left: 40px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 1200px) {
    flex-direction: column;

    .logo-obrigado{
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .logo-obrigado{
        width:300px;
        height: 400px;
        align-self: center;
        margin-left: 45px; 
    }

    aside {
      width: 400px;
      position: absolute;
      border-radius: 25px;
      height: 20vh;
      margin-top: 8px;
      margin-left: 35px;
    }
    form{
        margin-top: 150px;
        align-self: center;
        width: 500px;
    }
   
  }
`;
