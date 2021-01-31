import { axios } from '../../core/indexCore';

export default {
    getAll: () => axios.get('./dialogs')
} 