import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required("O email é obrigatório"),
  password: yup.string().min(8, "Senha obrigatória").required(),
});
