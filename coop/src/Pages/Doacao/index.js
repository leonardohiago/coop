import React, {useState} from "react";
import {useForm} from "react-hook-form";

import { CgDanger } from "react-icons/cg";

import { Container, Section, Aside } from "./styles";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";

import logo from "../../assets/coop-logo.png";
import obrigado from "../../assets/obrigado-vertical.png";

import api from '../../services/api';
import { render } from "@testing-library/react";

const Doacao = () => {
  
 /*
 const {register, handleSubmit, errors} = useForm();
  const[nomeCompleto, setNomeCompleto] = useState(false);
  const[whatsapp, setWhatsapp] = useState(false);
  const[dataNascimento, setDataNascimento] = useState(false);

  const [listaDoacoes, setListaDoacoes] = useState([]);
  */

  /*
  function onSubmit(value){
    if(value.nomeCompleto !== ' ' 
    && value.whatsapp !== ' '
    && value.dataNascimento !== ' ');
    
  }
*/
  const [form, SetForm] = React.useState({
    nomeCompleto: '',
    whatsapp: '',
    itensDoacao: '1,2,4',
    dataEntrega: '',
    statusEntrega: 'Aguardando!',
    fkOng: '1',
  });

  const [listaDoacoes, setListaDoacoes] = useState([]);

  const handleChange = (event) =>{
    SetForm({...form, [event.target.name]: event.target.value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()

    api.post('/doacao', {...form})
     .then((response) => console.log(response));

    api.get(`/doacao`)
        .then((response)=>{
          let doacoes = [];

          response.data.forEach(doacao => {
            doacoes.push(doacao);
          });
          
          setListaDoacoes(doacoes);
          console.log(doacoes)
         
        })
       

  }


  
  return (
    <Container>
      <Section>
     
        <form onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="logo" />
          <p className="p-1">Confirme sua Doação</p>

          <div>
            <label>
              Nome completo
              <input
                type="text"
                name="nomeCompleto"
                value={form.nomeCompleto}
                onChange={handleChange}
                /*
                ref={register({
                  required: "Por favor, preencha o campo."
                })}
                
                {errors.nomeCompleto && <p className="error"><CgDanger color="red" size={16} /> {errors.nomeCompleto.message}</p>}
                */
              />
              
             
            
            </label>
         
            <label>
              Whatsapp
              <input
                type="text"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                /*
                ref={register({
                  required: "Por favor, preencha o campo."
                })}
                 {errors.whatsapp && <p className="error"><CgDanger color="red" size={16} /> {errors.whatsapp.message}</p>}

                */
              />
             
            </label>
          </div>

          <div>
            <p className="p-2">O que deseja doar?</p>
          </div>

          <Checkbox></Checkbox>

          <div className="row-1">
            <label>
              Data de Entrega da Doação
              <input
                type="text"
                name="dataEntrega"
                value={form.dataEntrega}
                onChange={handleChange}
                /*
                ref={register({
                  required: "Por favor, preencha o campo."
                })}
                 {errors.dataNascimento && <p className="error"><CgDanger color="red" size={16} /> {errors.dataNascimento.message}</p>}
                */
              />
             
            </label>
          </div>

          <div className="row-2">
            <Button
              className="button-size"
              background="var(--verde)"
              backgroundHover="var(--roxo)"
              type="submit"
            >
              Confirmar
            </Button>
            <Button
              className="button-size color-cancel"
              background="var(--cinza)"
              backgroundHover="var(--cinza-claro)"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Section>

      <Aside>
        <img className="logo-obrigado" src={obrigado} alt="obrigado" />
      </Aside>
    </Container>
  );
};

export default Doacao;
