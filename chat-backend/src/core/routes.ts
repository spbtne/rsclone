import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import { updateLastSeen, checkAuth } from "../middleware/indexMiddleWare";
import {
  loginValidation,
  registerValidation,
} from "../utils/validations/indexValidation";

import {
  UserCtrl,
  DialogCtrl,
  MessageCtrl,
} from "../controllers/indexControllers";

const createRoutes = (app: express.Express) => {
  const UserController = new UserCtrl();
  const DialogController = new DialogCtrl();
  const MessageController = new MessageCtrl();

  app.use(bodyParser.json());
  app.use(updateLastSeen);
  app.use(checkAuth);

  app.get("/user/:id", UserController.show);
  app.get("/user/me/profile", UserController.getMe);
  app.post("/user/registration", UserController.create);
  app.post("/user/login", UserController.login);
  app.delete("/user/:id", UserController.delete);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages/:id", MessageController.delete);
};

export default createRoutes;
