import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import api from '../../services/api';

import { Container, FieldGroup, ItemsGrid } from "./styles";
import { FaMoneyBillWave, FaTshirt, FaChair, FaHandsHelping, FaBook, FaShower } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiDogBowl, GiVacuumCleaner } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Button from "../../Components/Button";


const ItensDoacao = () => {

  const [ itensOng, setItensOng] = useState([]);

  useEffect(() => {

    api.get("/ongs")
    .then(resp => {
      setItensOng(resp.data.ongs[0].itens_doacao_requeridos)
    })
  })

  console.log(itensOng)
  
  // .replace(' ', '').split(',')


  const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
      data.itens_doacao = data.itens_doacao.toString();
  
      console.log(JSON.stringify(data));
      
      api.put(`/ongs`,
        JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          }
        })
        .then(response => {
          if(response.status == 200) {
            alert("Sua atualização foi confirmada.")
  
          }
  
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  
    const doacoes = [
      {
        id: 1,
        icone: <FaMoneyBillWave color="#fff" size={48} />,
        nome: "Dinheiro",
      },
      {
        id: 2,
        icone: <ImSpoonKnife color="#fff" size={48} />,
        nome: "Alimento",
      },
      {
        id: 3,
        icone: <GiDogBowl color="#fff" size={48} />,
        nome: "Ração",
      },
      {
        id: 4,
        icone: <MdComputer color="#fff" size={48} />,
        nome: "Eletrônicos",
      },
      {
        id: 5,
        icone: <FaTshirt color="#fff" size={48} />,
        nome: "Roupa",
      },
      {
        id: 6,
        icone: <FaChair color="#fff" size={48} />,
        nome: "Móveis",
      },
      {
        id: 7,
        icone: <FaHandsHelping color="#fff" size={48} />,
        nome: "Mão de Obra",
      },
      {
        id: 8,
        icone: <FaBook color="#fff" size={48} />,
        nome: "Material Escolar",
      },
      {
        id: 9,
        icone: <GiVacuumCleaner color="#fff" size={48} />,
        nome: "Material de Limpeza",
      },
      {
        id: 10,
        icone: <IoIosConstruct color="#fff" size={48} />,
        nome: "Material de Construção",
      },
      {
        id: 11,
        icone: <FaShower color="#fff" size={48} />,
        nome: "Material de Higiene",
      },
      {
        id: 12,
        icone: <HiOutlineDotsHorizontal color="#fff" size={48} />,
        nome: "Outro",
      },
    ];
  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <FieldGroup>
            <ItemsGrid>
              {doacoes.map(({ id, nome, icone }) => (
                <div className="checkbox" key={id}>
                <input type= "checkbox"  name ="itens_doacao" value={nome} ref={register()}/>
                  <p>{icone}</p>
                  <span>{nome}</span>
               </div>
              ))}
            </ItemsGrid>
          </FieldGroup>
        </Container>
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
        </form>
       
      </>
    );
  };
  
  export default ItensDoacao;
