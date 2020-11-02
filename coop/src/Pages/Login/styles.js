import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;

  aside {
    align-items: center;
    background-color: var(--roxo);
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 55vw;

    p {
      color: #FFF;
      font-size: 4.8em;
      font-weight: 700;
      line-height: 56px;
      max-width: 38vw;
      padding: 1em 0;
      text-align: right;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 2em 4.6em;
    width: 43vw;

    img {
      height: 5.4em;
      width: 13.2em;
    }

    form {
      display: flex;
      flex-direction: column;
      height: 50vh;
      justify-content: space-between;
      width: 354px;

      p {
        color: var(--preto);
        font-size: 3em;
        font-weight: 700;
        line-height: 35px;
        text-align: left;
      }

      .error {
        color: red;
        font-size: 1.5em;
        font-weight: 700;
        text-align: left;
      }

      div {
        display: flex;
        flex-direction: column;
      
        label {
          color: var(--preto);
          font-size: 1.8em;
          font-weight: 400;
          line-height: 21.09px;
          margin-bottom: 0.6em;
        }

        .label-senha {
          display: flex;
          justify-content: space-between;

          a {
            color: var(--roxo);
            font-size: 12px;
            font-weight: 400;
            line-height: 14.06px;
          }
        }
        
        div {
          position: relative;
        }

        i {
          color: var(--verde);
          cursor: pointer;
          position: absolute;
          right: 10px;
          top: 12px;
        }

        i:hover {
          color: var(--roxo);
        }

        input {
          background-color: var(--cinza);
          border: none;
          border-radius: 1px;
          height: 46px;
          padding-left: 20px;
          width: 354px;
        }
      }

      button {
        border-radius: 100px;
        cursor: pointer;
        font-size: 18px;
        height: 44px;
        line-height: 21px;
        width: 354px;
      }
    }

    p {
      color: var(--preto);
      font-size: 12px;
      font-weight: 400;
      line-height: 14.06px;

      span {
        cursor: pointer;
        color: var(--roxo);
        margin-left: 2px;
        text-decoration: underline;
      }
      span:hover {
        opacity: .8;
      }
    } 
  } 

  @media (max-width: 935px) {
    flex-direction: column;

    aside {
      border-radius: 25px;
      height: 20vh;
  
      p {
        font-size: 2.8em;
        text-align: start;
        br {
          display: none;
        }
      }
    }

    section {
      height: 80vh;

      img {
        align-self: center;
      }
      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 870px) {
    aside {
      width: 80%;
    }
    section {
      width: auto;
    }
  }

  @media (max-width: 505px) {
    aside {
      width: 100%;

      p {
        font-size: 2em;
        br {
          display: none;
        }
      }
    }
  }

  @media (max-width: 440px) {
    aside {
      p {
        font-size: 1.8em;
      }
    }

    section {
      padding: 1em;
    }
  }
`;
