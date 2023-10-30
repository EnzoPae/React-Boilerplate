import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Este campo es obligatorio"),
  name: Yup.string().max(20, "Muy largo").required("Este campo es obligatorio"),
  lastName: Yup.string()
    .max(20, "Muy largo")
    .required("Este campo es obligatorio"),
});

export const forgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
});

export const changePassSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Este campo es obligatorio"),
});
