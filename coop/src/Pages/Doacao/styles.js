import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
}

section{
    display: flex;
    flex-direction: column;
    padding: 2em 5.6em;
    width: 70vw;
}

aside{
    background-color: var(--roxo);
    display: flex;
    height: 100vh;
    width: 30vw;
}

form{
    display: flex;
    flex-direction: column;
    margin-top: 3%;
}

.row-paragraph-one{
    color: #var(--preto);
    font-size: 3em;
    font-weight: 700;
    line-height: 31px;
    margin-top: 36px;
}

.row-paragraph-two{
    font-size: 1.8em;
    margin-bottom: 11px;
}

label{
    color: var(--preto);
    font-size: 1.8em;
    font-weight: 400;
    line-height: 21.09px;
    margin-bottom: 0.6em;
}

section img {
    height: 5.4em;
    width: 13.2em;
}
      
div{
    width: 680px;
    display: flex;
}

.label-style{
    display: flex;
    flex-direction: column;
    width: 197vw;
}

.input-style {
    background-color: var(--cinza);
    border-radius: 10px;
    border-style: none;
    height: 46px;
    max-width: 315px;
}

.row-date{
    margin-top: 15px;
}

.row{
    display: flex;
    padding-top: 16px;
}

.button-size{
    border-radius: 30px;
    width: 187px;
    height: 39px;
    margin:0 1.5em 0 0;    
}

.button-color-cancel{
    color: var(--vermelho);
}

.button-font{
    font-size: 1.8em;
}
`;
