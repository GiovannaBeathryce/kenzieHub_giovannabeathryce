import { ListTechs } from "./style";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext";
import { AuthContext, ITech } from "../../Contexts/AuthContext";
import { IModalContext } from "../../Contexts/ModalContext";
import React from "react";

const List = () => {
  const { removeTech } = useContext<IModalContext>(ModalContext);

  const { techs } = useContext(AuthContext);

  return (
    <ListTechs>
      {techs.length === 0 ? (
        <div>
          <h5>Você ainda não possui tecnologias cadastradas </h5>
        </div>
      ) : (
        techs.map((tech: ITech) => (
          <div key={tech.id}>
            <h4>{tech.title}</h4>
            <p>
              {tech.status}
              <button onClick={() => removeTech(tech.id)}>
                <BsTrash />
              </button>
            </p>
          </div>
        ))
      )}
    </ListTechs>
  );
};

export default List;
