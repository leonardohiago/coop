import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 32px 40px;

  h2 {
    width: 100%;
    margin-bottom: 32px;
    text-align: center;
  }
`;

export const Fotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;