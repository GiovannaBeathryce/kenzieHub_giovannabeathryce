import { HeaderConteiner } from "./style";

const Header = ({ user }) => {
  return (
    <>
      <HeaderConteiner>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </HeaderConteiner>
    </>
  );
};

export default Header;
