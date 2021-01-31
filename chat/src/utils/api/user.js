import { axios } from '../../core/indexCore';

export default {
    login: (postData) => axios.post("/user/login", postData)
}