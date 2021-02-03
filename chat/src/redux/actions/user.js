import { userApi } from "../../utils/api/indexApi";
import { openNotification } from "./../../utils/helpers/index";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi
    .login(postData)
    .then(({ data }) => {
      const { token } = data;
        openNotification({
          title: "Отлично!",
          text: "Авторизация успешна.",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      return data;
    });
  },
  fetchUserRegistration: (postData) => (dispatch) => {
    return userApi.registration(postData).then(({ data }) => {
      window.localStorage["email_hash"] = data.obj.confirm_hash;
      return data;
    });
  },
};

export default Actions;
