import express from "express";
import socket from "socket.io";
import { validationResult, Result, ValidationError } from "express-validator";
import { UserModel } from "../models/indexModels";
import createJWTToken from "../utils/createJWTToken";
import { IUser } from "../models/User";
import { generatePasswordHash } from "../utils/indexUtils";
import bcrypt from "bcryptjs";

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }
  show = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json(user);
    });
  };
  getMe = (req: any, res: express.Response) => {
    const id = req.user.data._doc._id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json(user);
    });
  };

  searchUser = (req: any, res: express.Response) => {
    const query: string = req.query.query;
    UserModel.find()
      .or([
        { fullname: new RegExp(query, "i") },
        { email: new RegExp(query, "i") }
      ])
      .then((users: any) => res.json(users))
      .catch((err: any) => {
        return res.status(404).json({
          status: "error",
          message: err
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);
    user
      .save()
      .then((obj: any) => {
        res.json({
          status: "success",
          obj,
        });
      })
      .catch((reason) => {
        return res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  };
  delete = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user: { fullname: any; }) => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`
        });
      });
  };
  
  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWTToken(user);
        res.json({
          status: "success",
          token,
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "Incorrect password or email",
        });
      }
    });
  };
  verify = (req: any, res: express.Response): void => {
    const hash: string = req.query.hash;

    if (!hash) {
      res.status(422).json({ errors: "Invalid hash" });
    } else {
      UserModel.findOne({ confirm_hash: hash }, (err: any, user: IUser) => {
        if (err || !user) {
          return res.status(404).json({
            status: "error",
            message: "Hash not found",
          });
        }

        user.confirmed = true;
        user.save((err: any) => {
          if (err) {
            return res.status(404).json({
              status: "error",
              message: err,
            });
          }

          res.json({
            status: "success",
            message: "Аккаунт успешно подтвержден!",
          });
        });
      });
    }
  };
}

export default UserController;
