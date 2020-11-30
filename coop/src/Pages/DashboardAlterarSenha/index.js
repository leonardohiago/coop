import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import { useAuth } from "../../hooks/auth";

import api from "../../services/api";

import Header from "../../Components/Header";
import MenuDashboard from "../../Components/MenuDashboard";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import Input from '../../Components/Input';
import { Container, Content, Form, FieldGroup, Field } from "./styles";

const DashboardAlterarSenha = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const { id, email } = useAuth();

  const [atualizando, setAtualizando] = useState(false);

  const handleSubmit = async (data, { reset }) => {
    try {
      setAtualizando(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        senha: Yup.string().required('Informe a senha').min(6, 'Senha deve conter pelo menos 6 caracteres.'),
        novaSenha: Yup.string()
          .when('senha', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
        confirmSenhaOng: Yup.string()
          .when('novaSenha', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          })
          .oneOf([Yup.ref('novaSenha'), null], 'Senhas não são inguais.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      data.email = email;

      await api.put(`/usuarios/alterar-senha`, data).then(
        (response) => {
            setAtualizando(false);

            addToast({
              type: 'success',
              title: 'Sucesso',
              description: 'Senha alterada com sucesso!',
            });

            reset();
          }
      ).catch(() => {
        setAtualizando(false);
        
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível altarar a senha.',
        });
      });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;

          setAtualizando(false);

          addToast({
            type: 'error',
            title: 'Erro',
            description: error.message,
          });
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <Header />

      <Container>
        <MenuDashboard />

        <Content>  
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FieldGroup>
              <Field>
                <label htmlFor="senhaOng">
                  Senha atual<span>*</span>
                </label>
                <Input
                  type="password"
                  name="senha"
                />
              </Field>

              <Field>
                <label htmlFor="confirmSenhaOng">
                  Nova senha<span>*</span>
                </label>
                <Input
                  type="password"
                  name="novaSenha"
                />
              </Field>

              <Field>
                <label htmlFor="confirmSenhaOng">
                  Confirmação da nova senha<span>*</span>
                </label>
                <Input
                  type="password"
                  name="confirmSenhaOng"
                />
              </Field>
            </FieldGroup>

            <div className="box-button">
              <Button 
                className="button-size"
                background="var(--verde)"
                backgroundHover="var(--roxo)"
                type="submit"
              >
                {atualizando ? 'Atualizando...' : 'Atualizar'}
              </Button>
              <Button
                className="button-size button-color-cancel"
                background="var(--cinza)"
                backgroundHover="var(--cinza-escuro)"
                colorText="var(--vermelho)"
                colorTextHover="var(--preto)"
                onClick={() => formRef.current.reset()}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardAlterarSenha;
