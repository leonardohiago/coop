import React from "react";

import { Container, Content, StatusDoacoes, BoxStatus, Form, Subtitle, FieldGroup, ItemsGrid, FieldButtons, SubmitButton, CancelButton } from "./styles";
import { FaMoneyBillWave, FaTshirt, FaChair, FaHandsHelping, FaBook, FaShower } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiDogBowl, GiVacuumCleaner } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuDashboard from "../../Components/MenuDashboard";

const DashboardItens = () => {
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
      <Header logado={true} />

      <Container>
        <MenuDashboard />

        <Content>
          <StatusDoacoes>
            <BoxStatus color="verde">
              <span>17</span>
              <p>Doações Recebidas</p>
            </BoxStatus>

            <BoxStatus color="amarelo">
              <span>42</span>
              <p>Doações Pendentes</p>
            </BoxStatus>

            <BoxStatus color="vermelho">
              <span>12</span>
              <p>Doações Canceladas</p>
            </BoxStatus>
          </StatusDoacoes>

          <Form>
            <Subtitle>Editar Itens de Doação</Subtitle>

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

            <FieldButtons>
              <SubmitButton>Atualizar</SubmitButton>
              <CancelButton>Cancelar</CancelButton>
            </FieldButtons>
          </Form>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardItens;
