import * as yup from "yup";

export const modalSchema = yup.object({
  title: yup.string().required("O nome é obrigatótio"),
});
