import React, { useRef, useState } from "react";
import * as Yup from 'yup';
import { format } from 'date-fns';
import { useHistory, Link, useParams } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import InputMask from '../../Components/InputMask';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import Button from "../../Components/Button";
import { Form } from "./styles";

import logo from "../../assets/coop-logo.png";
import api from "../../services/api";

const FormularioDoacao = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef(null);
  const [enviando, setEnviando] = useState(false);

  const checkboxOptions = [
    { id: 'Dinheiro', value: 'Dinheiro', label: 'Dinheiro' },
    { id: 'Alimento', value: 'Alimento', label: 'Alimento' },
    { id: 'Ração', value: 'Ração', label: 'Ração' },
    { id: 'Eletrônicos', value: 'Eletrônicos', label: 'Eletrônicos' },
    { id: 'Roupa', value: 'Roupa', label: 'Roupa' },
    { id: 'Moveis', value: 'Móveis', label: 'Móveis' },
    { id: 'MaodeObra', value: 'Mão de Obra', label: 'Mão de Obra' },
    { id: 'MaterialEscolar', value: 'Material Escolar', label: 'Material Escolar' },
    { id: 'MaterialdeLimpeza', value: 'Material de Limpeza', label: 'Material de Limpeza' },
    { id: 'MaterialdeConstrucao', value: 'Material de Construção', label: 'Material de Construção' },
    { id: 'MaterialdeHigiene', value: 'Material de Higiene', label: 'Material de Higiene' },
    { id: 'Outros', value: 'Outros', label: 'Outros' },
  ];

  const handleSubmit = async (data, { reset }) => {  
    try {
      data.itensDoacao = data.itensDoacao.toString();
      data.statusEntrega = "Aguardando";
      data.fkOng = {"id": id};
      
      setEnviando(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nomeCompleto: Yup.string().required('Informe o seu nome').min(3, 'Nome deve conter pelo menos 3 caracteres.'),
        whatsapp: Yup.string()
          .required('Informe o número do WhatsApp')
          .matches(/\(\d{2}\) \d{5}-\d{4}/, 'Informe um número de WhatsApp válido.'),
        itensDoacao: Yup.string().required('Selecione o que deseja doar'),
        dataEntrega: Yup.string().required('Selecione a data de entrega da doação'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/doacao`, data).then(
        (response) => {
          if (response.status === 200) {
            setEnviando(false);

            addToast({
              type: 'success',
              title: 'Sucesso',
              description: 'Sua doação foi confirmada. O Coop agradece sua colaboração =)',
            });

            reset();
            history.push('/ongs');
          }
        }
      ).catch(() => {
        setEnviando(false);

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível confirmar a doação.',
        });
      });
    } catch (err) {
      setEnviando(false);

      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;

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
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Link to="/">
       <img src={logo} alt="Coop." />
      </Link>
      <p className="p-1">Confirme sua Doação</p>

      <div>
        <label htmlFor="nomeCompleto">
          Nome Completo
          <Input
            name="nomeCompleto"
          />
        </label>

        <label>
          Whatsapp
          <InputMask
            name="whatsapp"
            mask="(99) 99999-9999"
          />
  
        </label>
      </div>

      <div>
        <p className="p-2">O que deseja doar?</p>
      </div>

      <Checkbox name="itensDoacao" options={checkboxOptions} />

      <div className="row-1">
        <label>
          Data para Entrega da Doação
          <Input
            type="date"
            name="dataEntrega"
            min={format(new Date(), 'yyyy-MM-dd')}
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
          {enviando ? 'Enviando...' : 'Confirmar'}
        </Button>
        <Button
          className="button-size color-cancel"
          background="var(--cinza)"
          backgroundHover="var(--cinza-claro)"
          onClick={() => formRef.current.reset()}
        >
          Cancelar
        </Button>
      </div>
    </Form>
  );
};

export default FormularioDoacao;
