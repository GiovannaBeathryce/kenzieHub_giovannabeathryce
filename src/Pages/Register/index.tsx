import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "../../Components/Navbar";
import Form from "../../Components/Form";
import { registerSchema } from "../../Validators/registerUser";
import { ButtonFormDisabled } from "../../Components/Button/style";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { userRegister, returnLogin } = useContext(AuthContext);

  return (
    <>
      <Navbar>
        <button onClick={() => returnLogin()}>Voltar</button>
      </Navbar>
      <Form onSubmit={handleSubmit(userRegister)}>
        <>
          <h3>Registre-se</h3>
          <p>Rapido e grátis, vamos nessa</p>

          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message}

          <label htmlFor="confirm-password">Confirmar senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Digite novamente sua senha"
            {...register("confirm_password")}
          />
          {errors.confirm_password?.message}

          <label htmlFor="biography">Biografia</label>
          <input
            type="text"
            id="biography"
            placeholder="Nos conte um pouco sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}

          <label htmlFor="contact">Contatos</label>
          <input
            type="text"
            id="contact"
            placeholder="Contato alternativo"
            {...register("contact")}
          />
          {errors.contact?.message}

          <label htmlFor="select-module">Selecione seu módulo</label>
          <select id="select-module" required {...register("course_module")}>
            <option value="option">Selecione</option>
            <option id="select-module">
              Primeiro Módulo (Introdução ao Frontend)
            </option>
            <option id="select-module">
              Segundo Módulo (Frontend Avançado)
            </option>
            <option id="select-module">
              Terceiro Módulo (Introdução ao Backend)
            </option>
            <option id="select-module">Quarto Módulo (Backend Avançado)</option>
          </select>

          <ButtonFormDisabled type="submit">Cadastrar</ButtonFormDisabled>
        </>
      </Form>
    </>
  );
};

export default Register;
