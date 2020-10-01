import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1%;
}

.container {
  display: flex;
  position: relative;
  padding-left: 9%;
  height: 7vh;
  width: 15vw; 
}

.item-position{
  padding-top: 9px; 
}

.container input {
  position: absolute;
  opacity: 0;
}
  
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: 45px;
  background-color: var(--cinza);
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
  
.checkmark:hover {
  background-color: var(--cinza-claro);
}
 
.container input:checked ~ .checkmark {
  background-color: var(--roxo);
}
  
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
  
.container input:checked ~ .checkmark:after {
  display: block;
}
  
.container .checkmark:after {
  left: 15px;
  top: 5px;
  width: 11px;
  height: 20px;
  border: solid white;
  border-width: 0 5px 5px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
   
}
  
`;
