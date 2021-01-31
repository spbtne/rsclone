import { userApi } from "../../utils/api/indexApi";
import { openNotification } from "./../../utils/helpers/index";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        openNotification({
          title: "Ошибка при авторизации",
          text: "Неверный логин или пароль",
          type: "error",
        });
      } else {
        openNotification({
          title: "Отлично!",
          text: "Авторизация успешна.",
          type: "success",
        });
        dispatch(Actions.setUserData(data));
      }
    });
  },
};

export default Actions;
