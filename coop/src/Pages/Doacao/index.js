import React from 'react';
import { Container } from './styles';
import GroupCheckbox from '../../Components/Checkbox';
import logo from '../../assets/coop-logo.png';

const Doacao = () =>{
 
    return(
      <Container>
        <section>
          <img src={logo} alt=""/>
          
          <p className="row-paragraph-one">Confirme sua Doação</p>
         
          <form>
          
          <div>
          <label className="label-first-line" >Nome completo
            <input className="input-style" type="text" name="fullname"/>
            </label>
            <label className="label-first-line">Whatsapp
            <input className="input-style" type="text" name="contact"/>
          </label>
          </div>

          <div>
            <p className="row-paragraph-two">O que deseja doar?</p>
          </div>
         
          <GroupCheckbox></GroupCheckbox>
         

          <div>
          <label className="label-first-line">
              Data de Entrega da Doação
          <input className="input-style" type="text" name="deliverydate" />
          </label>
          </div>

          <div className="row">
          <input class="buttom-style-confirm button" type="submit" value="Confirmar" />
          <input class="buttom-style-cancel button" type="submit" value="Cancelar" />
          </div>


          </form>
        

        </section>

        <aside>
          <img  alt=""/>
        </aside>
      </Container>
      
       
    );
};

export default Doacao;
