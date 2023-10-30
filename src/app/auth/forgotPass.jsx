//Hooks
import { useAlerts } from "../../hooks/useAlerts";
//Formik
import { Formik, Form } from "formik";
import { forgotPassSchema } from "./schema/authSchemas";
import FormikInput from "../../components/forms/formikInput";
//Components
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import SendButton from "../../components/forms/sendButton";

const ForgotPass = () => {
  const { showError, showSuccess, ref } = useAlerts();
  const initialValues = {
    email: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values)
      //resetForm();
    } catch (error) {
      showError(error);
    }
  };
  return (
    <Card
      title="Recuperar Contraseña"
      subTitle="Por favor, ingrese el email con el que se ha registrado para recuperar su contraseña."
      className="col-12 md:col-10 lg:col-8 xl:col-6 m-auto"
    >
      <Toast ref={ref} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={forgotPassSchema}
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
            <SendButton label="Confirmar" loading={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default ForgotPass;
