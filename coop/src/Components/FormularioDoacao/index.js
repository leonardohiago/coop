import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../Components/Button";
import { GroupCheckbox } from "./styles";

import logo from "../../assets/coop-logo.png";
import api from "../../services/api";

import { CgDanger } from "react-icons/cg";

const FormularioDoacao = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    data.itensDoacao = data.itensDoacao.toString();
    data.statusEntrega = "Aguardando";
    data.fkOng = {"id": 1}; // TODO: RECEBER O ID PELO BOTÃO DA TELA ANTERIOR   

    console.log(JSON.stringify(data));
    
    api.post(`/doacao`,
      JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if(response.status == 200) {
          alert("Sua doação foi confirmada. O Coop agradece sua colaboração =)")
          event.target.reset();
        }
        console.log(response)
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img className="logo" src={logo} alt="logo" />
      <p className="p-1">Confirme sua Doação</p>

      <div>
        <label htmlFor="nomeCompleto">
          Nome Completo
          <input
            type="text"
            name="nomeCompleto"
            ref={register({
              required: "Por favor, preencha o campo.",
              maxLength: 100,
              })}
          />
          {errors.nomeCompleto && <p className="error"><CgDanger color="red" size={16} /> {errors.nomeCompleto.message}</p>}
        </label>

        <label>
          Whatsapp
          <input
            type="text"
            name="whatsapp"
            ref={register({
              required: "Por favor, preencha o campo.",
              maxLength: 14,
              pattern: {
              value: /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/i,
                message: "Informe um número válido.",
              },
            })}
            />
            {errors.whatsapp && <p className="error"><CgDanger color="red" size={16} /> {errors.whatsapp.message}</p>}
  
        </label>
      </div>

      <div>
        <p className="p-2">O que deseja doar?</p>
      </div>

      <GroupCheckbox>
        <div>
          <label className="item">
            Dinheiro
            <input
              type="checkbox"
              name="itensDoacao"
              value="Dinheiro"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Alimento
            <input
              type="checkbox"
              name="itensDoacao"
              value="Alimento"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Ração
            <input
              type="checkbox"
              name="itensDoacao"
              value="Ração"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Eletrônicos
            <input
              type="checkbox"
              name="itensDoacao"
              value="Eletrônicos"
              ref={register()}
            />
            <span></span>
          </label>
        </div>

        <div>
          <label className="item">
            Roupa
            <input
              type="checkbox"
              name="itensDoacao"
              value="Roupa"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Móveis
            <input
              type="checkbox"
              name="itensDoacao"
              value="Móveis"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Mão de obra
            <input
              type="checkbox"
              name="itensDoacao"
              value="Mão de Obra"
              ref={register()}
            />
            <span></span>
          </label>
          <label>
            Material Escolar
            <input
              type="checkbox"
              name="itensDoacao"
              value="Material Escolar"
              ref={register()}
            />
            <span></span>
          </label>
        </div>

        <div>
          <label>
            Material de Limpeza
            <input
              type="checkbox"
              name="itensDoacao"
              value="Material de Limpeza"
              ref={register()}
            />
            <span></span>
          </label>
          <label>
            Material de Construção
            <input
              type="checkbox"
              name="itensDoacao"
              value="Material de Construção"
              ref={register()}
            />
            <span></span>
          </label>
          <label>
            Material de Higiene
            <input
              type="checkbox"
              name="itensDoacao"
              value="Material de Higiene"
              ref={register()}
            />
            <span></span>
          </label>
          <label className="item">
            Outros
            <input
              type="checkbox"
              name="itensDoacao"
              value="Outros"
              ref={register()}
            />
            <span></span>
          </label>
        </div>
      </GroupCheckbox>

      <div className="row-1">
        <label>
          Data para Entrega da Doação
          <input
            type="text"
            name="dataEntrega"
            ref={register({
            required: "Por favor, preencha o campo."
          })}
          />
           {errors.dataEntrega && <p className="error"><CgDanger color="red" size={16} /> {errors.dataEntrega.message}</p>}
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
  );
};

export default FormularioDoacao;
