import { HeaderConteiner } from "./style";

const Header = ({ user }) => {
  return (
    <>
      <HeaderConteiner>
        <h2>Olá, {user.name}</h2>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
      </HeaderConteiner>
    </>
  );
};

export default Header;
