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

import { Button, Block, FormField } from "../../../components/indexComponents";
import { validateField } from "../../../utils/helpers/index";

const success = true;

const RegistrationForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
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
            <FormField
              name="email"
              icon={<MailOutlined />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder={"E-mail"}
              touched={touched}
              errors={errors}
              values={values}
              type="text"
            />
            <FormField
              name="fullname"
              icon={<UserOutlined />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder={"Имя и Фамилия"}
              touched={touched}
              errors={errors}
              values={values}
              type="text"
            />

            {/* 
!
!
!
 ПОЛЯ С ПАРОЛЯМИ ОСТАВИЛ ПО-СТАРОМУ, НЕ ПРОКИДЫВАЛОСЬ ЗНАЧЕНИЕ iconRender,
если будут ошибки в дальнейшем - поправить поля по примеру выше через компонент FormField */}

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
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password_2", touched, errors)}
              help={!touched.password_2 ? "" : errors.password_2}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Повторите Ваш пароль",
                },
              ]}
            >
              <Input.Password
                id="password_2"
                size="large"
                name="password_2"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Повторите пароль"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="primary"
                size="large"
              >
                Зарегистироваться
              </Button>
            </Form.Item>
            <Link to="/login" className="auth__login-link">
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
