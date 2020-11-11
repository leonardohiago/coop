import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:1024px) {
    max-width: 100%;
  }
`;

export const Filtro = styled.div`
  margin-bottom: 16px;
  display: flex;

  select {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    color: var(--roxo);
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background: var(--cinza);

    &:last-child {
      margin-left: 8px;
      flex-grow: 1;
    }
  }
`;

export const Mapa = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: solid 2px var(--roxo);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    height: 390px;
  }
`;

export const OngPin = styled.div`
  position: relative;
  width: 50px;
  background: #fff;
  border-radius: 8px;
  transition: all 0.3s;

  &:before {
    position: absolute;
    bottom: -8px;
    left: calc(50% - 8px);
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 0; 
    height: 0; 

    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
  }

  &:hover {
    width: 200px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.65);
    z-index: 9999;

    #resumo-ong-pin {
      display: flex;
    }
  }
`;

export const ContentPin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

export const AvatarPin = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const ResumoOngPin = styled.div`
  width: 100%;
  padding: 8px;
  border-left: solid 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;

  h2 {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 14px;
  }

  div.contato-pin {
    margin: 4px 0;
    font-size: 20px;

    svg {
      margin-left: 4px;
      fill: var(--roxo);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        fill: var(--verde);
      }
    }
  }

  button {
    width: 90%;
    height: 24px;
    font-size: 12px;
  }
`;