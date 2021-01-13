import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { Button, Block } from "../../../components/indexComponents";

function LoginForm() {
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form>
          <Form.Item
            name="userlogin"
            rules={[
              {
                required: true,
                message: "Введите Ваш логин",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Логин"
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
          <Form.Item>
            <Button type="primary" size="large">
              Войти
            </Button>
          </Form.Item>
          <Link to="/registration" className="auth__registration-link">
            Зарегистироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
}

export default LoginForm;
