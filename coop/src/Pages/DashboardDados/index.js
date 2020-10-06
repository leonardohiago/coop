import React from "react";
import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Container } from "./styles";

const DashboardDados = () => {

  return (
    <>
      <Header logado={true} />

      <Container>
        <MenuDashboard />

        <section>
        
          <form>
          <p className="paragraph">Dados da ONG</p>
            <div className="caixa"> 
              <label className="label-readonly">
                Nome da ONG*
                <input type="text" readOnly placeholder="   ONG Ação Vida"/>
              </label>
              <label className="label-readonly">
                CNPJ
                <input className="input" type="text" readOnly placeholder="   00.806.666/0001-31"/>
              </label>
            </div>

            <div className="caixa"> 
              <label>
                E-mail*
                <input type="text"  placeholder=""/>
              </label>
              <label>
               Whatsapp*
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <div className="caixa"> 
              <label>
                Sobre*
                <input type="text"  placeholder=""/>
              </label>
              <label>
               Areá de atuação*
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <div className="caixa"> 
              <label>
                Facebook*
                <input type="text"  placeholder=""/>
              </label>
              <label>
               Instagram
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <p className="paragraph">Endereço da ONG</p>
            <div className="caixa"> 
              <label>
                Logadouro*
                <input type="text"  placeholder=""/>
              </label>
              <label>
              Número
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <div className="caixa"> 
              <label>
                Complemento
                <input type="text"  placeholder=""/>
              </label>
              <label>
                CEP*
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <div className="caixa"> 
              <label>
                Estado*
                <input type="text"  placeholder=""/>
              </label>
              <label>
                Cidade*
                <input className="input" type="text"  placeholder=""/>
              </label>
            </div>

            <div className="caixa1"> 
            <Button
              className="button-size-font button-size button-font"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
            >
              Atualizar
            </Button>
            <Button
              className="button-size-font button-size button-font button-color-cancel"
              background="var(--cinza)"
              backgroundHover="var(--cinza-claro)"
            >
              Cancelar
            </Button>
            </div>

           
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardDados;