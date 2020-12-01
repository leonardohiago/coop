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

  div, label {
    opacity: ${props => props.showMenu ? '1' : '0'};
  }

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

export const Avatar = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 24px 0 8px 0;

  img {
    width: 100%;
    object-fit: contain;
    border: solid 4px var(--cinza);
    border-radius: 50%;
    background: var(--roxo);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
  }
`;

export const InputChangeAvatar = styled.label`
    width: 28px;
    height: 28px;
    margin: 0 0 16px 0;
    padding: 6px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--roxo);
    }

    &:hover {
      background: var(--roxo);
    }

    &:hover svg {
      color: var(--cinza-claro);
    }
`;

export const ButtonToggleMenu = styled.button`
  width: 32px;
  height: 32px;
  margin: 16px 0 0px 0;
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