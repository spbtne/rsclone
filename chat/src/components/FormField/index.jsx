import React from "react";
import { Form, Input } from "antd";

import { validateField } from "../../utils/helpers/index";

const FormField = ({
  name,
  placeholder,
  handleChange,
  handleBlur,
  icon,
  touched,
  errors,
  values,
  type
}) => {
  return (
    <Form.Item
    validateStatus={validateField(name, touched, errors)}
    help={!touched[name] ? "" : errors[name]}
    hasFeedback
  >
      <Input
        id={name}
        name={name}
        size="large"
        placeholder={placeholder}
        prefix={icon}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
      />
    </Form.Item>
  );
};
export default FormField;
