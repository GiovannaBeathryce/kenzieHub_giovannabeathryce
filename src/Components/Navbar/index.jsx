import { Container } from "./style";

const Navbar = ({ children }) => {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      {children}
    </Container>
  );
};

export default Navbar;
