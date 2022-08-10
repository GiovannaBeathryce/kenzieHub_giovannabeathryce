// import { useEffect } from "react";
// import api from "../../Services/api";
import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar>
        <button>Voltar</button>
      </Navbar>
      <Form>
        <h3>Registre-se</h3>
        <p>Rapido e grátis, vamos nessa</p>

        <label htmlFor="name">
          Nome
          <input type="text" id="name" placeholder="Digite aqui seu nome" />
        </label>

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

        <label htmlFor="confirm-password">
          Confirmar senha
          <input
            type="password"
            id="confirm-password"
            placeholder="Digite novamente sua senha"
          />
        </label>

        <label htmlFor="biography">
          Biografia
          <input
            type="text"
            id="biography"
            placeholder="Nos conte um pouco sobre você"
          />
        </label>

        <label htmlFor="contact">
          Contatos
          <input type="text" id="contact" placeholder="Contato alternativo" />
        </label>

        <label htmlFor="select-module">
          Selecione seu módulo
          <select name="select" id="select-module">
            <option value="option">Selecione</option>
            <option name="" id="select-module">
              Primeiro Módulo
            </option>
            <option name="" id="select-module">
              Segundo Módulo
            </option>
            <option name="" id="select-module">
              Terceiro Módulo
            </option>
            <option name="" id="select-module">
              Quarto Módulo
            </option>
            <option name="" id="select-module">
              Quinto Módulo
            </option>
            <option name="" id="select-module">
              Sexto Módulo
            </option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default Register;
