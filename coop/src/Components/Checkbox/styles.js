import styled from 'styled-components'

export const GroupCheckbox = styled.div`
  display: flex;
  width:100%;
  flex-wrap: wrap;

  /* input {
    margin: 8px 0;
    padding: 16px 24px;
    width: 320px;
    height: 46px;
    background: var(--cinza);
    border-radius: 10px;
    border: none;
  } */

  label {
    display: flex;
    position: relative;
    padding-left: 60px;
    height: 60px;
    width: 165px; 
    flex-wrap: wrap;
    padding-top: 5px;
  }


  .item{
    padding-top: 11px;
  }

  label input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
    
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 45px;
    width: 45px;
    background-color: var(--cinza);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
  }
    
  span:hover {
    background-color: var(--cinza-claro);
  }
  
  label input[type="checkbox"]:checked ~ span {
    background-color: var(--roxo);
  }
    
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
    
  label input:checked ~ span:after {
    display: block;
  }
    
  label span:after {
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