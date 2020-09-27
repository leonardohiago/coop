import React from 'react';

import logo from '../../assets/coop-logo.png';

const Login = () => {
  return (
    <main style={{alignItems: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                  fontSize: '10px'}}>

      <aside style={{alignItems: 'center',
                    backgroundColor: 'var(--roxo)', display: 'flex', height: '100vh', justifyContent: 'center', width: '57vw'}}>

        <p style={{color: '#FFF',
                          fontFamily: 'Roboto', fontSize: '4.8em', fontStyle: 'normal', fontWeight: 700, lineHeight: '56px', maxWidth: '38vw', padding: '1em 0', textAlign: 'right'}}>
          Colabore com o <br />trabalho de ONGs
        </p>
      </aside>

      <section style={{display: 'flex',
                      flexDirection: 'column',
                      height: '100vh',
                      justifyContent: 'space-between',
                      padding: '2em 4.6em',
                      width: '43vw'}}>

        <img src={logo} alt="" style={{
                      height: '5.4em',
                      width: '13.2em'}} />

        
        <form style={{display: 'flex',
                      flexDirection: 'column',
                      height: '50vh',
                      justifyContent: 'space-between',
                      width: '354px'}}>
          <p style={{color: '#1C1C1C',
                    fontFamily: 'Roboto',
                    fontSize: '3em',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '35px',
                    textAlign: 'left'}}>
            Login
          </p>
          
          <div style={{display: 'flex',
                       flexDirection: 'column'}}>
            <label htmlFor="email" style={{color: '#1C1C1C',
                    fontFamily: 'Roboto',
                    fontSize: '1.8em',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '21.09px',
                    marginBottom: '.6em'}}>          
              E-mail
            </label>

            <input type="text" name="email" id="email" style={{backgroundColor: '#ECECEC',
              border: 'none',
              borderRadius: '1px',
              height: '46px',
              width: '354px'
              }} />
          </div>
          
          <div style={{display: 'flex',
                       flexDirection: 'column'}}>
            <label htmlFor="senha" style={{color: '#1C1C1C',
                    display: 'flex',
                    fontFamily: 'Roboto',
                    fontSize: '1.8em',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    justifyContent: 'space-between',
                    lineHeight: '21.09px',
                    marginBottom: '.6em'}}>
              Senha
              <span><a href="#" style={{color: '#5B25B1',
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '14,06px'}}>
              Esqueceu a senha?
              </a></span>
            </label>
          
            <input type="password" name="senha" id="senha"  style={{backgroundColor: '#ECECEC',
              border: 'none',
              borderRadius: '1px',
              height: '46px',
              width: '354px'
              }} />
          </div>

          <button style={{backgroundColor: '#18B087',
                          border: 'none',
                          borderRadius: '100px',
                          cursor: 'pointer',
                          height: '44px',
                          width: '354px',
                          }}>
            <span style={{color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '21px'}}>
              Acessar
            </span>
          </button>
        </form>

        <p style={{color: '#1C1C1C',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '14,06px'}}>
          Não possui cadastro?
          <span><a href="#" style={{color: '#5B25B1',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '14,06px'}}>
            {' '}Crie sua conta agora
            </a></span>
        </p>
      </section>
    </main>
  );
};

export default Login;
