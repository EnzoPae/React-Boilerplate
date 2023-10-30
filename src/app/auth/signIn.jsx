//Context
import { useAuth } from "../../context/authContext";
//Hooks
import { useAlerts } from "../../hooks/useAlerts";
//Router
import { Link } from "react-router-dom";
//Formik
import { Formik, Form } from "formik";
import { signInSchema } from "./schema/authSchemas";
import FormikInput from "../../components/forms/formikInput";
import FormikPassword from "../../components/forms/formikPassword";
//Components
import { Card } from "primereact/card";
import SendButton from "../../components/forms/sendButton";
import { Toast } from "primereact/toast";

const SignIn = () => {
  const { login } = useAuth();
  const { showError, ref } = useAlerts();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      login();
      console.log(values);
    } catch (error) {
      showError(error);
    }
  };
  return (
    <Card
      title="Iniciar Sesión"
      subTitle="Ingrese los siguientes datos para iniciar sesión."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Toast ref={ref} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikInput
              name="email"
              placeholder={"Ejemplo@gmail.com"}
              label={"Email"}
              disabled={isSubmitting}
            />
            <FormikPassword
              name="password"
              placeholder={"Ingresar contraseña"}
              label={"Contraseña"}
              disabled={isSubmitting}
            />
            <div className="text-xs mb-2">
              <Link to={"/forgot/password"} className="ml-1 text-primary">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <SendButton label="Ingresar" loading={isSubmitting} />
          </Form>
        )}
      </Formik>
      <div className="flex justify-content-end text-sm text-500">
        ¿Aún no tienes una cuenta?
        <Link to={"/signup"} className="ml-1 text-primary">
          Registrate
        </Link>
      </div>
    </Card>
  );
};

export default SignIn;
