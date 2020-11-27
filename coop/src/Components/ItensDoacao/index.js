import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Container, FieldGroup, ItemsGrid, LabelItem, BotoesDeAcao } from "./styles";
import { FaMoneyBillWave, FaTshirt, FaChair, FaHandsHelping, FaBook, FaShower } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiDogBowl, GiVacuumCleaner } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Button from "../../Components/Button";


const ItensDoacao = () => {
  const { id } = useAuth();
  const { addToast } = useToast();
  const [itensOng, setItensOng] = useState();
  const [itensDoacao, setItensDoacao] = useState([
    {
      id: 1,
      icone: <FaMoneyBillWave color="#fff" size={48} />,
      nome: "Dinheiro",
      precisa: false,
    },
    {
      id: 2,
      icone: <ImSpoonKnife color="#fff" size={48} />,
      nome: "Alimento",
      precisa: false,
    },
    {
      id: 3,
      icone: <GiDogBowl color="#fff" size={48} />,
      nome: "Ração",
      precisa: false,
    },
    {
      id: 4,
      icone: <MdComputer color="#fff" size={48} />,
      nome: "Eletrônicos",
      precisa: false,
    },
    {
      id: 5,
      icone: <FaTshirt color="#fff" size={48} />,
      nome: "Roupa",
      precisa: false,
    },
    {
      id: 6,
      icone: <FaChair color="#fff" size={48} />,
      nome: "Móveis",
      precisa: false,
    },
    {
      id: 7,
      icone: <FaHandsHelping color="#fff" size={48} />,
      nome: "Mão de Obra",
      precisa: false,
    },
    {
      id: 8,
      icone: <FaBook color="#fff" size={48} />,
      nome: "Material Escolar",
      precisa: false,
    },
    {
      id: 9,
      icone: <GiVacuumCleaner color="#fff" size={48} />,
      nome: "Material de Limpeza",
      precisa: false,
    },
    {
      id: 10,
      icone: <IoIosConstruct color="#fff" size={48} />,
      nome: "Material de Construção",
      precisa: false,
    },
    {
      id: 11,
      icone: <FaShower color="#fff" size={48} />,
      nome: "Material de Higiene",
      precisa: false,
    },
    {
      id: 12,
      icone: <HiOutlineDotsHorizontal color="#fff" size={48} />,
      nome: "Outro",
      precisa: false,
    },
  ]);

  useEffect(() => {
    if(id > 0) {
      api.get(`/ongs/ong/${id}`)
        .then(response => {
          setItensOng(response.data.itens_doacao_requeridos);
  
          setItensDoacao(itensDoacao.map(item => {
            return response.data.itens_doacao_requeridos.indexOf(item.nome) !== -1
              ? {...item, precisa: true}
              : item;
          }));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleCancelar = () => {
    setItensDoacao(itensDoacao.map(item => {
      return itensOng.indexOf(item.nome) !== -1
        ? {...item, precisa: true}
        : {...item, precisa: false};
    }));
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api.post(`/ongs/alterar-itens/${id}`, {
      itens_doacao_requeridos: data.itens_doacao.toString()
    }).then(response => {
      addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Itens de doação atualizados com sucesso!',
      });
    }).catch(() => {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Não foi possível atualizar os dados.',
      });
    });
  }

  const handleCheckItem = (id) => {
    setItensDoacao(itensDoacao.map(item => {
      if(item.id === id) {
        return {...item, precisa: !item.precisa}
      } else {
        return item;
      }
    }));
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <FieldGroup>
            <ItemsGrid>
              {itensDoacao.map(item => (
                <LabelItem className="checkbox" key={item.id} destaque={item.precisa}>
                  <input type= "checkbox"  name ="itens_doacao" value={item.nome} ref={register()} checked={item.precisa} onChange={() => handleCheckItem(item.id)} />
                  <div>
                    <p>{item.icone}</p>
                    <span>{item.nome}</span>
                  </div>
                </LabelItem>
              ))}
            </ItemsGrid>
          </FieldGroup>
        </Container>

        <BotoesDeAcao>
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
            backgroundHover="var(--cinza-escuro)"
            colorText="var(--vermelho)"
            colorTextHover="var(--preto)"
            onClick={() => handleCancelar()}
          >
            Cancelar
          </Button>
        </BotoesDeAcao>
      </form>
      
    </>
  );
};
  
export default ItensDoacao;
