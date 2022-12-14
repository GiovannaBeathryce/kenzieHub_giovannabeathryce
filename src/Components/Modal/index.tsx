import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "../../Validators/modal";
import { useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext";

import Form from "../Form/";
import { ButtonForm } from "../Button/style";
import { ModalAdd } from "./style";
import React from "react";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  const { addTec } = useContext(ModalContext);
  const { closeModal } = useContext(ModalContext);

  return (
    <ModalAdd>
      <Form onSubmit={handleSubmit(addTec)}>
        <>
          <div className="headerModal">
            <h5>Cadastrar Tecnologia</h5>
            <button onClick={() => closeModal()}>x</button>
          </div>
          <label htmlFor="title"> Nome do projeto</label>
          <input
            type="text"
            id="title"
            placeholder="Digite uma nova tecnologia"
            {...register("title")}
          />
          {errors.title?.message}

          <label htmlFor="status">Status</label>
          <select id="status" required {...register("status")}>
            <option value="option">Selecione</option>
            <option id="status">Iniciante</option>
            <option id="status">Intermediário</option>
            <option id="status">Avançado</option>
          </select>
          <ButtonForm>Cadastrar Tecnologia</ButtonForm>
        </>
      </Form>
    </ModalAdd>
  );
};

export default Modal;
