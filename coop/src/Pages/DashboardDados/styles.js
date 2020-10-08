import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
}
`;

export const Section = styled.section` 
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
}

.box{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 100px;
}

.font-paragraph{
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;   
}

p{
    display: flex;
    flex-wrap: wrap;
    width: 38vw;
    margin-left: 100px;
    margin-bottom: 25px;
    margin-top: 25px; 
}

label{
    display: flex;
    flex-direction: column;
    width: 340px;
    heigth: 20px;
    margin-top: 10px;
}

.color-readonly{
    color: var(--cinza-escuro);
}

input[type="text"], input[type="email"]{
    background: var(--cinza-claro);
    border-style: none;
    width: 320px;
    height:35px;
    border-radius: 10px;
    padding: 16px 24px;
}

input, .color-input{
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
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

.button-color-cancel{
    color: var(--vermelho);
}

.button-size{
    border-radius: 30px;
    width: 180px;
    height: 33px;    
    margin: 15px 30px 0px 0px;
    padding: 10px;
    font-size: 17px;         
}

`;
