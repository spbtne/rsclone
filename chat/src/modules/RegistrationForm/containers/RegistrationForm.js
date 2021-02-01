import { withFormik } from "formik";
import RegistrationForm from "../components/RegistrationForm";
import validateForm from "../../../utils/validate";

import { userActions } from "../../../redux/actions/indexActions";
import store from "./../../../redux/store";

export default withFormik({
  //   mapPropsToValues: () => ({ email: "test@asd.com" }), set default value
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserRegistration(values))
      .then(({ status }) => {
        setTimeout(() => {
          if (status === "success") {
            props.history.push("/");
          }
        }, 50);

        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "RegistrationForm",
})(RegistrationForm);
