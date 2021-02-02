import express from "express";
import socket from "socket.io";

import { MessageModel, DialogModel } from "../models/indexModels";
import { IMessage } from "../models/Message";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: express.Response) => {
    const dialogId = req.query.dialog;
    const userId = req.user._id;

    MessageModel.find()
      .or([{ dialog: dialogId }])
      .populate(["dialog"])
      .exec(function (err: any, messages: any) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found",
          });
        }
        return res.json(messages);
      });
  };
  create = (req: any, res: express.Response) => {
    const userId = req.user.data._doc._id;
    const postData = {
      text: req.body.text,
      user: userId,
      dialog: req.body.dialog,
    };
    const message = new MessageModel(postData);

    message
      .save()
      .then((obj: any) => {
        obj.populate("dialog", (err: any, message: any) => {
          if (err) {
            return res.status(500).json({
              status: "error",
              message: err
            });
          }

          DialogModel.findOneAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            { upsert: true },
            function (err) {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err,
                });
              }
            }
          );

          res.json(message);
          this.io.emit("SERVER:NEW_MESSAGE ", message);
        });
      })
      .catch((reason: any) => {
        res.json(reason);
      });
  };

  delete = (req: any, res: express.Response) => {
    const id = req.query.id;
    const userId = req.user.data._doc._id;
    MessageModel.findOneAndDelete({ _id: id })
      .then((message: any) => {
        if (message) {
          res.json({ message: `Message deleted` });
        }
      })
      .catch((err: any) => {
        res.json({
          message: `Message not found`,
        });
      });
  };
}

export default MessageController;
