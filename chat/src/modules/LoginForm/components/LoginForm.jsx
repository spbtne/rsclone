import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  LockOutlined
} from "@ant-design/icons";

import { Button, Block } from "../../../components/indexComponents";

const validate = (key, touched, errors) => {
if (touched[key]) {
  if (errors[key]) {
    return 'error';
  } else {
    return "success";
  }
} else {
  return "";
}
};

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
    <div className="auth__top">
      <h2>Войти в аккаунт</h2>
      <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
      <Block>
      <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={validate("email", touched, errors)}
              help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined />}
                size="large"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                </Form.Item>
                <Form.Item
              validateStatus={validate("password", touched, errors)}
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                id="password"
                prefix={<LockOutlined/>}
                size="large"
                type="password"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button  onClick={handleSubmit} type="primary" size="large">
                Войти в аккаунт
                
              </Button>
            </Form.Item>
            <Link className="auth__login-link" to="/registration">
              Зарегистрироваться
            </Link>
          </Form>
      </Block>
    </div>
  );
}

export default LoginForm;