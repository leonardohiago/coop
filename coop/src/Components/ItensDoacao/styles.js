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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;
  margin: 0 auto;

  li {
    background: #5b25b1;
    border: 2px solid #f5f5f5;
    height: 140px;
    width: 140;
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
  }
`;
