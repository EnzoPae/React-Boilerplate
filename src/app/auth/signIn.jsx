//Context
import { useAuth } from "../../context/authContext";
//Router
import { Link } from "react-router-dom";
//Formik
import { Formik, Form } from "formik";
import { signInSchema } from "./schema/authSchemas";
import FormikInput from "../../components/formik/formikInput";
import FormikPassword from "../../components/formik/formikPassword";
//Components
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const SignIn = () => {
  const { login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Card
      title="Iniciar Sesión"
      subTitle="Ingrese los siguientes datos para iniciar sesión."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={() => login()}
      >
        {() => (
          <Form>
            <FormikInput
              name="email"
              placeholder={"ejemplo@gmail.com"}
              label={"Email"}
            />
            <FormikPassword
              name="password"
              placeholder={"Ingresar contraseña"}
              label={"Contraseña"}
            />
            <Button label="Ingresar" className="mt-2" type="submit" />
          </Form>
        )}
      </Formik>
      <div className="flex justify-content-end text-500">
        ¿Aún no tienes una cuenta?
        <Link to={"/signup"} className="ml-1 text-primary">
          Registrate
        </Link>
      </div>
    </Card>
  );
};

export default SignIn;
