import { ListTechs } from "./style";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext";
import { AuthContext } from "../../Contexts/AuthContext";

const List = () => {
  const { removeTech } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const listTech = user.techs;

  return (
    <ListTechs>
      {listTech.length === 0 ? (
        <div>
          <h5>Você ainda não possui tecnologias cadastradas </h5>
        </div>
      ) : (
        listTech.map((tech) => (
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
