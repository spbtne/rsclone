import { axios } from '../../core/indexCore';

export default {
    getAllByDialogId: id => axios.get('/messages?dialog=' + id)
}