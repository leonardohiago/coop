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
        height: 100vh;
        padding: 2em 4.6em;
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
     justify-content: space-between;
     margin-top: 3%;
    }

    .row-paragraph-one{
        color: #var(--preto);
        font-size: 3em;
        font-weight: 700;
        line-height: 35px;
        text-align: left;
        margin-top: 36px;
    }

    .row-paragraph-two{
        font-size: 18px;
        margin-bottom: 15px;
    }

    label{
        color: var(--preto);
        font-size: 1.8em;
        font-weight: 400;
        line-height: 21.09px;
        margin-bottom: 0.6em;
    }
      
    div{
        width: 800px;
        display: flex;
        justify-content: space-between;
    }

    .row{
        display: flex;
        justify-content: flex-start;
        margin-top: 3%;
    }

    .label-first-line{
        display: flex;
        flex-direction: column;
        width: 45%;
    }

    .input-style {
        background: #ececec;
        border-radius: 6px;
        border-style: none;
        height: 6vh;
        box-sizing: border-box;
    }

    .button{
        border-radius: 30px;
        width: 14vw;
        height: 6vh;
        border-style: none;     
        margin:0 1.5em 0 0;    
    }

    .buttom-style-confirm{
        background: #18b087;
        color: #ffff;
        font-size: 1.8em;
        font-weight: 700;
        line-height: 35px;
    }

    .buttom-style-cancel{
        background: #ececec;
        color: #FD6060;
        font-size: 1.8em;
        font-weight: 700;
        line-height: 35px;
    }
  
    section img {
        height: 5.4em;
        width: 13.2em;
    }

}
`;
