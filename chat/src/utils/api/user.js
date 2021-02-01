import { axios } from "../../core/indexCore";

export default {
  login: (postData) => axios.post("/user/login", postData),
  registration: (postData) => axios.post("/user/registration", postData),
  getMe: () => axios.get("/user/me/profile"),
};
