export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
    if (!value) {
      errors.email = 'Введите e-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = 'Неверный e-mail';
    }
  },
  password: (value) => {
    if (!value) {
      errors.password = 'Введите пароль';
    } else if (
      !isAuth &&
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(value)) {
      errors.password = isAuth ? "Неверный пароль" : 'Слишком легкий пароль';
    }
  }
};

Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
