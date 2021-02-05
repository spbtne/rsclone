import { json } from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { DialogModel, MessageModel } from "../models/indexModels";
import socket from "socket.io";

class DialogController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: express.Response) => {
    const userId  = req.user.data._doc._id;

    DialogModel.find()
    .or([{ author: userId }, { partner: userId }])
    .populate(["author", "partner"])
    .populate({
      path: "lastMessage",
      populate: {
        path: "user"
      }
    })
      .exec(function (err: any, dialogs: any) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found",
          });
        }
        return res.json(dialogs);
      });
  };
  create = (req: any, res: express.Response) => {
    const postData = {
      author: req.user.data._doc._id,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);

    dialog
      .save()
      .then((dialogObj: any) => {
        const message = new MessageModel({
          text: req.body.text,
          dialog: dialogObj._id,
          user: req.user.data._doc._id,
        });
        message
          .save()
          .then(() => {
            dialogObj.lastMessage = message._id;
            dialogObj.save().then(() => {
              res.json(dialogObj);
              this.io.emit("SERVER:DIALOG_CREATED", {
                ...postData,
                dialog: dialogObj,
              });
            });
          })
          .catch((reason) => {
            res.json(reason);
          });
      })
      .catch((err) => {
        res.json({
          status: "error",
          message: err,
        });
      });
  };
  delete = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    DialogModel.findOneAndDelete({ _id: id })
      .then((dialog: any) => {
        if (dialog) {
          res.json({ message: `Dialog deleted` });
        }
      })
      .catch((err: any) => {
        res.json({
          message: `Dialog not found`,
        });
      });
  };
}

export default DialogController;
