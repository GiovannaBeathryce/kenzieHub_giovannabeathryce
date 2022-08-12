import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email().required("O email é obrigatório"),
  password: yup
    .string()
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Minimo 8 caracteres, deve conter ao menos 1 caracter especial e 1 número"
    )
    .required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha")
    .required(),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
});
