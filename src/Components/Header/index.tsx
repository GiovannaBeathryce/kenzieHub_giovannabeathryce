import React from "react";
import { HeaderConteiner } from "./style";
import { IUserProps } from "../../Contexts/AuthContext";

const Header = ({ user }: IUserProps) => {
  return (
    <HeaderConteiner>
      <h2>Olá, {user.name}</h2>
      <p>{user.course_module}</p>
    </HeaderConteiner>
  );
};

export default Header;
