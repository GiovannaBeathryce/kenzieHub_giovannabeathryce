import React from "react";
import { ButtonCadastrar, ButtonForm } from "../../Components/Button/style";
import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <Form>
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Digite aqui seu email" />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
        />

        <ButtonForm type="submit">Entrar</ButtonForm>

        <p>Ainda não possui uma conta?</p>
        <ButtonCadastrar type="submit">Cadastre-se</ButtonCadastrar>
      </Form>
    </>
  );
};

export default Login;
