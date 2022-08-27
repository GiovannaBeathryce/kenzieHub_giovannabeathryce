import React, { ReactElement, ReactNode } from "react";
import { Container } from "./style";

export interface INavbarProps {
  children?: ReactElement;
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      {children}
    </Container>
  );
};

export default Navbar;
