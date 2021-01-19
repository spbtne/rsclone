import express from "express";
import { UserModel } from "../models/indexModels";
import  createJWTToken  from "../utils/createJWTToken";

class UserController {
  show(req: express.Request, res: express.Response) {
    const id = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json(user);
    });
  }
  create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };
    const user = new UserModel(postData);
    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  }
  delete(req: express.Request, res: express.Response) {
    const id = req.params.id;
    UserModel.findOneAndDelete({ _id: id })
      .then((user: any) => {
        res.json({ message: `User ${user.fullname} deleted` });
      })
      .catch((err: any) => {
        res.json({
          message: `User not found`,
        });
      });
  }
  login(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.login,
      password: req.body.password,
    };

    UserModel.findOne({ email: postData.email }, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "Not found" });
      }
      if (user.password === postData.password) {
        const token = createJWTToken(user);
        res.json({
          status: "success",
          token,
        });
      } else {
        res.json({
          status: "error",
          message: "Incorrect password or email",
        });
      }
    });
  }
}

export default UserController;
