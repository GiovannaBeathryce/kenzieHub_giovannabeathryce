import React from "react";
import Form from "../../Components/Form";

const Login = () => {
  return (
    <Form>
      <h3>Login</h3>

      <label htmlFor="email">
        Email
        <input type="text" id="email" placeholder="Digite aqui seu email" />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
        />
      </label>

      <button type="submit">Entrar</button>

      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </Form>
  );
};

export default Login;
