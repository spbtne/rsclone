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

function RegistrationForm() {
  const success = true;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <Form>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Введите Ваш e-mail",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="E-mail"
                prefix={<MailOutlined />}
              />
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
              name="password"
              rules={[
                {
                  required: true,
                  message: "Введите Ваш пароль",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Пароль"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
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
                placeholder="Повторите пароль"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
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
}

export default RegistrationForm;
