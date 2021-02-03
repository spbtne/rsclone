/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { axios } from '../../core/indexCore';

export default {
    getAllByDialogId: id => axios.get("/messages?dialog=" + id),
    send: (text, dialogId) =>
      axios.post("/messages", {
        text: text,
        dialog: dialogId
      })
  };
