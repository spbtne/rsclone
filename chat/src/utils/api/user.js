import { axios } from '../../core/indexCore';

export default {
    login: (postData) => axios.post("/user/login", postData),
    getMe: () => axios.get("/user/me/profile")
}