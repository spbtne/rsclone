import { withFormik } from "formik";
import RegistrationForm from "../components/RegistrationForm";
import validateForm from "../../../utils/validate";

export default withFormik({
  //   mapPropsToValues: () => ({ email: "test@asd.com" }), set default value
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password2: ''
  }),
  validate: values => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });


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
