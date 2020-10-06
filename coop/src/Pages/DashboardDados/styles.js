import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    
}

.label-readonly{
    color: #828282;
}

.paragraph{
    color: #var(--preto);
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-left: 130px;
    height: 50px;
    cursor: context-menu;
    
}   

.asterisk-color{
    color: var(--roxo);
}

.caixa1{
    display: flex;
    justify-content: center;
    width: 30vw;
    height: 70px;
    margin-left: 120px;
   
}
.button-size{
    border-radius: 30px;
    width: 159px;
    height: 33px;    
    margin: 0 1.5em 0 0;
}
.button-color-cancel{
    color: var(--vermelho);
}

form{
    margin-top: 55px;
}

.caixa{
    display: flex;
    justify-content: center;
    width: 70vw;
    height: 70px;

    label{
        display: flex;
        flex-direction: column;
        width: 25vw;
        margin: 0px 0px 0px 40px;
    
    input{
        background: var(--cinza);
        border-radius: 10px;
        border-style: none;
        height: 35px;
        width: 25vw;
        cursor: context-menu;
       
   
        }
    }
}

`;