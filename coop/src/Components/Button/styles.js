import styled from 'styled-components';

export const Container = styled.button`
  height: 36px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 18px;
  border: 0;
  color: ${props => props.colorText ? props.colorText : '#fff'};
  background: ${props => props.background};
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${props => props.colorTextHover ? props.colorTextHover : '#fff'};
    background: ${props => props.backgroundHover};
  }
`;