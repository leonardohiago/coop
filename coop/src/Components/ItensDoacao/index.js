import React from "react";

import { Container, FieldGroup, ItemsGrid } from "./styles";
import { FaMoneyBillWave, FaTshirt, FaChair, FaHandsHelping, FaBook, FaShower } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiDogBowl, GiVacuumCleaner } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ItensDoacao = () => {
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
        <Container>
            <FieldGroup>
              <ItemsGrid>
                {doacoes.map(({ id, nome, icone }) => (
                  <li key={id}>
                    <p>{icone}</p>
                    <span>{nome}</span>
                  </li>
                ))}
              </ItemsGrid>
            </FieldGroup>
          </Container>
    </>
  );
};

export default ItensDoacao;
