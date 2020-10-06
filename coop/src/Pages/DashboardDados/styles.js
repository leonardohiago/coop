import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
}

.paragraph{
    color: #var(--preto);
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-left: 130px;
    height: 50px;
    margin-top: 15px;
    cursor: context-menu;
}   

form{
    max-width: 1100px;
    background: #FFF;
    border-radius: 8px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
  
}

.caixa-button{
    display: flex;
    justify-content: center;
    width: 30vw;
    height: 120px;
    margin-left: 115px;

    .button-size{
        border-radius: 30px;
        width: 159px;
        height: 33px;    
        margin: 0 1.5em 0 0;
        margin-top: 15px;
    }
   
}

.button-color-cancel{
    color: var(--vermelho);
}

.caixa{
    display: flex;
    justify-content: center;
    width: 70vw;
    height: 10vh;
    flex-wrap: wrap;
    margin: 0 auto;

    label{
        display: flex;
        flex-direction: column;
        width: 25vw;
        height: 4vh;
        margin: 0px 0px 0px 40px;
    
    input{
        background: var(--cinza-claro);
        border-radius: 10px;
        border-style: none;
        height: 35px;
        width: 280px;
        cursor: context-menu;
        padding: 16px 24px;
       
        }
    }
}

`;
