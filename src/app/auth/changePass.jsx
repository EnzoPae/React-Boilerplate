//Hooks
import { useAlerts } from "../../hooks/useAlerts";
//Formik
import { Formik, Form } from "formik";
import { changePassSchema } from "./schema/authSchemas";
import FormikInput from "../../components/forms/formikInput";
import FormikPassword from "../../components/forms/formikPassword";
//Components
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import SendButton from "../../components/forms/sendButton";

const ChangePass = () => {
  const { showError, showSuccess, ref } = useAlerts();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      //const api_response = await axiosPublic.post(urlChangePass, values);
      //showSuccess(api_response);
      //resetForm();
      console.log(values)
      showSuccess()
    } catch (error) {
      showError(error);
    }
  };
  return (
    <Card
      title="Cambiar Contraseña"
      subTitle="Ingrese su email y una nueva contraseña para su cuenta."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Toast ref={ref} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={changePassSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikInput
              name="email"
              placeholder={"Ingresar email"}
              label={"Email"}
              disabled={isSubmitting}
            />
            <FormikPassword
              name="password"
              placeholder={"Ingresar contraseña"}
              label={"Nueva contraseña"}
              disabled={isSubmitting}
            />
            <FormikPassword
              name="confirmPassword"
              placeholder={"Repetir contraseña"}
              label={"Repetir contraseña"}
              disabled={isSubmitting}
            />
            <SendButton label="Confirmar" loading={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default ChangePass;
