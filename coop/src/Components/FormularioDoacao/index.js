import React, { useState } from "react";

import Button from "../../Components/Button";
import { GroupCheckbox } from "./styles";

import logo from "../../assets/coop-logo.png";

import api from "../../services/api";

// import {useForm} from "react-hook-form";
// import { CgDanger } from "react-icons/cg";

const FormularioDoacao = () => {
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
  const [form, SetForm] = useState({
    nomeCompleto: "",
    whatsapp: "",
    itensDoacao: "",
    dataEntrega: "",
    statusEntrega: "",
    fkOng: {
      id: 1,
    },
  });

  const [itens, setItens] = React.useState("");

  function handleCheckbox({ target }) {
    if (target.checked) {
      setItens([...itens, target.value]);
    } else {
      setItens(itens.filter((item) => item !== target.value));
    }
  }

  const handleChange = (event) => {
    SetForm({ ...form, [event.target.name]: event.target.value });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.post("/doacao", form).then((response) => {
      console.log(response.data);
    });
  };

  return (
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

      <GroupCheckbox>
        <div>
          <label className="item">
            Dinheiro
            <input
              type="checkbox"
              //checked={itens.includes("Dinheiro")}
              //value="Dinheiro"
              //onChange={handleCheckbox}
            />
            <span></span>
          </label>
          <label className="item">
            Alimento
            <input
              type="checkbox"
              //checked={itens.includes("2")}
              //value="2"
              //onChange={handleChange}
            />
            <span></span>
          </label>
          <label className="item">
            Ração
            <input
              type="checkbox"
              //checked={itens.includes("3")}
              //value="3"
              //onChange={handleChange}
            />
            <span></span>
          </label>
          <label className="item">
            Eletrônicos
            <input
              type="checkbox"
              //checked={itens.includes("4")}
              //value="4"
              //onChange={handleChange}
            />
            <span></span>
          </label>
        </div>

        <div>
          <label className="item">
            Roupa
            <input
              type="checkbox"
              //checked={itens.includes("5")}
              //value="5"
              //onChange={handleChange}
            />
            <span></span>
          </label>
          <label className="item">
            Móveis
            <input
              type="checkbox"
              // checked={itens.includes("6")}
              // value="6"
              // onChange={handleChange}
            />
            <span></span>
          </label>
          <label className="item">
            Mão de obra
            <input
              type="checkbox"
              //checked={itens.includes("7")}
              //value="7"
              // onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            Material escolar
            <input
              type="checkbox"
              // checked={itens.includes("8")}
              // value="8"
              // onChange={handleChange}
            />
            <span></span>
          </label>
        </div>

        <div>
          <label>
            Material limpeza
            <input
              type="checkbox"
              // checked={itens.includes("9")}
              // value="9"
              // onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            Material construção
            <input
              type="checkbox"
              // checked={itens.includes("10")}
              //value="10"
              //onChange={handleChange}
            />
            <span></span>
          </label>
          <label>
            Material higiene
            <input
              type="checkbox"
              //checked={itens.includes("11")}
              //value="11"
              // onChange={handleChange}
            />
            <span></span>
          </label>
          <label className="item">
            Outros
            <input
              type="checkbox"
              // checked={itens.includes("12")}
              // value="12"
              // onChange={handleChange}
            />
            <span></span>
          </label>
        </div>
      </GroupCheckbox>

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
  );
};

export default FormularioDoacao;
