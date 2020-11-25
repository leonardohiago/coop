import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 32px 48px;

  table {
    min-width: 656px;
    margin-top: 24px;
  }
`;

export const Form = styled.div`
  width: 625px;
  margin-bottom: 32px;
  background: #FFF;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;
  font-size: 24px;
`;


export const Field = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
