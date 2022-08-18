import { useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext";
import List from "../ListTechs";
import Modal from "../Modal";
import { MainContainer } from "./style";

const Main = () => {
  const { isVisible } = useContext(ModalContext);
  const { openModal } = useContext(ModalContext);

  return (
    <MainContainer>
      <section>
        <h3>Tecnologias</h3>
        <button onClick={() => openModal()}>+</button>
      </section>
      {isVisible && <Modal />}
      <List />
    </MainContainer>
  );
};

export default Main;
