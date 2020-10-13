import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.showMenu ? '204px' : '24px'};
  min-height: calc(100vh - 174px);
  padding-top: 0px;
  background: var(--cinza-claro);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;

  a {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 700;
    color: var(--preto);
    text-decoration: none;
    text-indent: 24px;
    transition: all 0.3s;
    white-space: nowrap;

    opacity: ${props => props.showMenu ? '1' : '0'};

    &:hover {
      background: var(--cinza);
    }

    &.nav__link--active {
      color: #fff;
      background: var(--roxo);
    }
  }
`;

export const ButtonToggleMenu = styled.button`
  width: 32px;
  height: 32px;
  margin: 32px 0;
  transform: ${props => props.showMenu ? 'translateX(0)' : 'translateX(0px)'};
  border: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  
  &:hover {
    background: var(--roxo);

    svg {
      fill: #fff;
    }
  }

  svg {
    transition: all 0.3s;
  }
`;