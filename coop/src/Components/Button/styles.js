import styled from 'styled-components';

export const Container = styled.button`
  height: 36px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 18px;
  border: 0;
  color: #fff;
  background: ${props => props.background};
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.backgroundHover};
  }
`;