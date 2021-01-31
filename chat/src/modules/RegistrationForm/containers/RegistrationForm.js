import { withFormik } from "formik";
import RegistrationForm from "../components/RegistrationForm";
import validateForm from "../../../utils/validate";

export default withFormik({
  //   mapPropsToValues: () => ({ email: "test@asd.com" }), set default value
  validate: values => {
    let errors = {};
    const validate = validateForm({ isAuth: false });

    Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]));

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegistrationForm',
})(RegistrationForm);
