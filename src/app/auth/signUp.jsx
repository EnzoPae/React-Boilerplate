//Router
import { Link } from "react-router-dom";
//Formik
import { Formik, Form } from "formik";
import { signUpSchema } from "./schema/authSchemas";
import FormikInput from "../../components/formik/formikInput";
import FormikPassword from "../../components/formik/formikPassword";
//Components
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  return (
    <Card
      title="Registro de usuarios"
      subTitle="Ingrese los siguientes datos para registrarse."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(x) => console.log(x)}
      >
        {() => (
          <Form>
            <FormikInput
              name="name"
              placeholder={"Ingresar nombre y apellido"}
              label={"Nombre y Apellido"}
            />
            <FormikInput
              name="email"
              placeholder={"Ingresar correo"}
              label={"Email"}
            />
            <FormikPassword
              name="password"
              placeholder={"Ingresar contraseña"}
              label={"Contraseña"}
            />
            <FormikPassword
              name="repeatPassword"
              placeholder={"Repetir contraseña"}
              label={"Repetir contraseña"}
            />
            <Button label="Registrarse" className="mt-2" type="submit" />
          </Form>
        )}
      </Formik>
      <div className="flex justify-content-end text-500">
        ¿Ya tienes una cuenta?
        <Link to={"/signin"} className="ml-1 text-primary">
          Ingresa
        </Link>
      </div>
    </Card>
  );
};

export default SignUp;
