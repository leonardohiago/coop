import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: ${props => props.show ? '100%' : '0'};
  height: ${props => props.show ? '100vh' : '0'};
  top: ${props => props.show ? '0' : '-100%'};
  left: ${props => props.show ? '0' : '-100%'};
  background: rgba(0, 0, 0, 0.45);
  z-index: 5000;
  transition: all 1s;

  display: flex;
  justify-content: center;
  align-items: center;
`;