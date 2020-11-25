import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
`;

export const ItemsGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;
  margin: 0 auto;
  
  span {
    flex: 1;
    margin-top: 15px;

    display: flex;
    align-items: center;
    color: white;
    font-size: 12px;
  }

  li.selected {
    background: #e1faec;
    border: 2px solid #34cb79;
  }
`;

export const LabelItem = styled.label`
  position: relative;
  background: var(--roxo);
  height: 140px;
  width: 140;
  border:${props => props.destaque ? '5px solid var(--verde)' : '5px solid var(--roxo)'};
  border-radius: 20px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.45);    
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BotoesDeAcao = styled.div`
  margin-top: 32px;
  display: flex;

  button {
    margin-right: 8px;
  }
`;