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

export const StatusDoacoes = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxStatus = styled.div`
  min-width: 192px;
  min-height: 152px;
  margin-bottom: 40px;
  padding: 28px 20px;
  border-radius: 25px;
  background: var(--cinza-claro);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s;
  cursor: pointer;

  & + & {
    margin-left: 40px;
  }

  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  }

  span {
    font-weight: bold;
    font-size: 64px;
    color: ${props => `var(--${props.color})`};
    line-height: 1em;
  }

  p {
    font-size: 14px;
    line-height: 1em;
  }
`;

export const ButtonDoado = styled.button`
  margin: 0 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => `var(--${props.color})`};
  background: none;
  border: none;
  transition: all 0.3s;

  &:hover {
    font-weight: 900;
  }
`;