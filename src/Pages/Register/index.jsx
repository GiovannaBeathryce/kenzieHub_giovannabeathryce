// import { useEffect } from "react";
// import api from "../../Services/api";
import { useForm } from "react-hook-form";
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

  const { userRegister } = useContext(AuthContext);

  return (
    <>
      <Navbar>
        <button>Voltar</button>
      </Navbar>
      <Form onSubmit={handleSubmit(userRegister)}>
        <h3>Registre-se</h3>
        <p>Rapido e grátis, vamos nessa</p>

        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <label htmlFor="confirm-password">Confirmar senha</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Digite novamente sua senha"
          {...register("confirm_password")}
        />
        <span>{errors.confirm_password?.message}</span>

        <label htmlFor="biography">Biografia</label>
        <input
          type="text"
          id="biography"
          placeholder="Nos conte um pouco sobre você"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>

        <label htmlFor="contact">Contatos</label>
        <input
          type="text"
          id="contact"
          placeholder="Contato alternativo"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>

        <label htmlFor="select-module">Selecione seu módulo</label>
        <select
          name="select"
          id="select-module"
          required
          {...register("course_module")}
        >
          <option value="option">Selecione</option>
          <option name="" id="select-module">
            Primeiro Módulo (Introdução ao Frontend)
          </option>
          <option name="" id="select-module">
            Segundo Módulo (Frontend Avançado)
          </option>
          <option name="" id="select-module">
            Terceiro Módulo (Introdução ao Backend)
          </option>
          <option name="" id="select-module">
            Quarto Módulo (Backend Avançado)
          </option>
        </select>

        <ButtonFormDisabled type="submit">Cadastrar</ButtonFormDisabled>
      </Form>
    </>
  );
};

export default Register;
