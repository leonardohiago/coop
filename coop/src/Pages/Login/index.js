import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import Button from '../../Components/Button';

import logo from '../../assets/coop-logo.png';

const Login = () => {
  const history = useHistory();

  return (
    <Container>

      <aside>
        <p>
          Colabore com o <br/>trabalho de ONGs
        </p>
      </aside>

      <section>

        <img src={logo} alt="" />
        
        <form>
          <p>
            Login
          </p>
          
          <div>
            <label htmlFor="email">          
              E-mail
            </label>

            <input type="text" name="email" id="email" />
          </div>
          
          <div>
            <label htmlFor="senha" className="label-senha">
              Senha
              {/* <span><a href="#">
                Esqueceu a senha?
              </a></span> */}
            </label>
          
            <input type="password" name="senha" id="senha" />
          </div>

          <Button onClick={() => history.push('/dashboard')} background="var(--verde)" backgroundHover="var(--roxo)">
            Acessar
          </Button>
        </form>

        <p>
          Não possui cadastro?
          <span onClick={() => history.push('/cadastrar-ong')}>
            Crie sua conta agora
          </span>
        </p>
      </section>
    </Container>
  );
};

export default Login;
