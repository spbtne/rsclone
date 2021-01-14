import { withFormik } from "formik";
import RegistrationForm from "../components/RegistrationForm";

export default withFormik({
  //   mapPropsToValues: () => ({ email: "test@asd.com" }), set default value
  validate: (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Обязательное поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Введите корректный e-mail";
    }
    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(
        values.password
      )
    ) {
      errors.password = "Слишком легкий пароль";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegistrationForm",
})(RegistrationForm);
