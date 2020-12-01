import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Content = styled.div`
    width: 100%;
    max-width: 914px;
    background: #f9f9f9;
    border-radius: 4px;
    padding: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 174px);
`;

export const Form = styled(Unform)`
  margin: 20px auto;
  padding: 64px;
  max-width: 1100px;
  background: #FFF;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    width: 430px;
    height: 46px;

    background: #F9F9F9;
    border-radius: 10px;
    border: 0;
    padding: 16px 24px;
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  flex: 1;
  width: 430px;
  height: 46px;

  background: #F9F9F9;
  border-radius: 10px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;

`;

export const Option = styled.option`
  background: #F9F9F9;
  border-radius: 10px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  cursor: pointer;
`;

export const Title = styled.h1`
  flex: 1;
  // margin-bottom: 60px;
  text-align: center;
  font-size: 36px;
`;

export const Subtitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px 40px 0px;
  font-size: 24px;
`;

export const Field = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label span {
    color: var(--roxo);
    font-weight: 700;
  }
`;

export const Radio = styled.div`
  display: flex;
  width:100%;
  flex-wrap: wrap;

  label {
    display: flex;
    position: relative;
    padding-left: 60px;
    height: 35px;
    width: 165px; 
    flex-wrap: wrap;
    align-items: center;
    padding-top: 22px;
  }

  label input[type="radio"] {
    width: 0;
    position: absolute;
    opacity: 0;
  }
    
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 45px;
    width: 45px;
    margin-top: 8px;
    background-color: var(--cinza);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
  }
    
  span:hover {
    background-color: var(--cinza-claro);
  }
  
  label input[type="radio"]:checked ~ span {
    background-color: var(--cinza-claro);
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
    left: 20px;
    top: 13px;
    color: var(--roxo);
    content: "X";
    position: absolute;
    text-align: center;

 
  }
`;

export const FieldGroup = styled.div`
    flex: 1;
    display: flex;
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: var(--roxo);
    border: 2px solid #f5f5f5;
    height: 218px;
    width: 218px;
    border-radius: 20px;
    padding: 32px 24px 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    span {
      flex: 1;
      margin-top: 82px;
    
      display: flex;
      align-items: center;
      color: white;
    }
    
    li.selected {
      background: #E1FAEC;
      border: 2px solid #34CB79;
    }
  }
`;

export const FieldButtons = styled.div`
  margin-top: 24px;
  flex: 1;
  
  display: flex;
  margin-bottom: 24px;
  width: 656px;
  gap: 16px;
`;