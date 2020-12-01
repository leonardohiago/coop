import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Foto = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background: var(--cinza-claro);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cinza-escuro);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BoxButtons = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

export const InputAddFoto = styled.label`
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