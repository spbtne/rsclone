import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Button, Block } from "../../../components/indexComponents";
import { validateField } from '../../../utils/helpers'


const success = true;

const RegistrationForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <Form onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              help={!touched.email ? "" : errors.email}

              rules={[
                {
                  required: true,
                  message: "Введите Ваш e-mail",
                },
              ]}
              hasFeedback
            >
              <Input
                id="email"
                name="email"
                size="large"
                placeholder="E-mail"
                prefix={<MailOutlined />}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {errors.email && touched.email && (
                <span className="error error-email" id="feedback">
                  {errors.email}
                </span>
              )} */}

            </Form.Item>
            <Form.Item
              name="userlogin"
              rules={[
                {
                  required: true,
                  message: "Введите Ваше имя",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Ваше имя"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item

              validateStatus={validateField("password", touched, errors)}
              help={!touched.password ? "" : errors.password}

              rules={[
                {
                  required: true,
                  message: "Введите Ваш пароль",
                },
              ]}
            >
              <Input.Password
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="large"
                placeholder="Пароль"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />

              {/* {errors.password && touched.password && (
                <span className="error error-password" id="feedback">
                  {errors.password}
                </span>
              )} */}
            </Form.Item>
            <Form.Item validateStatus={validateField("password", touched, errors)}

              name="password-repeat"
              rules={[
                {
                  required: true,
                  message: "Повторите Ваш пароль",
                },
              ]}
            >
              <Input.Password
                size="large"

                type="password2"

                placeholder="Повторите пароль"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" onClick={handleSubmit}>
                Зарегистироваться
              </Button>
            </Form.Item>
            <Link to="/" className="auth__login-link">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success--block">
            <InfoCircleTwoTone />
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegistrationForm;
