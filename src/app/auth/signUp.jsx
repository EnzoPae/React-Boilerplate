import { useRef } from "react";
//Router
import { Link } from "react-router-dom";
//Hooks
import { useAlerts } from "../../hooks/useAlerts";
//Formik
import { Formik, Form } from "formik";
import { signUpSchema } from "./schema/authSchemas";
import FormikInput from "../../components/forms/formikInput";
import FormikPassword from "../../components/forms/formikPassword";
import SendButton from "../../components/forms/sendButton";
//Components
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";

const SignUp = () => {
  const toast = useRef(null);
  const { showError, ref } = useAlerts();
  const showToast = () => {
    toast.current.show({
      severity: "success",
      summary: "Registro Exitoso",
      detail: "Se ha enviado un link de verificación a su correo",
      sticky: true,
    });
  };
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values)
      showToast();
      resetForm();
    } catch (error) {
      showError(error);
    }
  };
  return (
    <Card
      title="Registro de usuarios"
      subTitle="Ingrese los siguientes datos para registrarse."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Toast ref={ref} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikInput
              name="email"
              placeholder={"Ingresar correo"}
              label={"Email"}
              disabled={isSubmitting}
            />
            <div className="sm:flex block">
              <FormikInput
                name="name"
                placeholder={"Ingresar nombre"}
                label={"Nombre"}
                disabled={isSubmitting}
              />
              <div className="mx-1" />
              <FormikInput
                name="lastName"
                placeholder={"Ingresar apellido"}
                label={"Apellido"}
                disabled={isSubmitting}
              />
            </div>
            <FormikPassword
              name="password"
              placeholder={"Ingresar contraseña"}
              label={"Contraseña"}
              disabled={isSubmitting}
            />
            <FormikPassword
              name="confirmPassword"
              placeholder={"Repetir contraseña"}
              label={"Repetir contraseña"}
              disabled={isSubmitting}
            />
            <SendButton label="Registrarse" loading={isSubmitting} />
          </Form>
        )}
      </Formik>
      <div className="flex justify-content-end text-500">
        ¿Ya tienes una cuenta?
        <Link to={"/signin"} className="ml-1 text-primary">
          Ingresa
        </Link>
      </div>
      <Toast ref={toast} />
    </Card>
  );
};

export default SignUp;
