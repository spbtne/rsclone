import { axios } from "../../core/indexCore";

export default {
  getAll: () => axios.get("/dialogs"),
  create: ({ partner, text }) => axios.post("/dialogs", { partner, text }),
};
