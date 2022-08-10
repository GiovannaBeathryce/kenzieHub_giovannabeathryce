// import { useEffect } from "react";
// import api from "../../Services/api";
import Navbar from "../../Components/Navbar";
import Form from "../../Components/Form";
import { ButtonFormDisabled } from "../../Components/Button/style";

const Register = () => {
  return (
    <>
      <Navbar>
        <button>Voltar</button>
      </Navbar>
      <Form>
        <h3>Registre-se</h3>
        <p>Rapido e grátis, vamos nessa</p>

        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite aqui seu nome" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite aqui seu email" />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
        />

        <label htmlFor="confirm-password">Confirmar senha</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Digite novamente sua senha"
        />

        <label htmlFor="biography">Biografia</label>
        <input
          type="text"
          id="biography"
          placeholder="Nos conte um pouco sobre você"
        />

        <label htmlFor="contact">Contatos</label>
        <input type="text" id="contact" placeholder="Contato alternativo" />

        <label htmlFor="select-module">Selecione seu módulo</label>
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

        <ButtonFormDisabled type="submit">Cadastrar</ButtonFormDisabled>
      </Form>
    </>
  );
};

export default Register;
