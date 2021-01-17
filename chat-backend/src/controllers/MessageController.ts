import express from "express";
import { MessageModel } from "../models/indexModels";

class MessageController {
    index(req: express.Request, res: express.Response) {
        const dialogId = req.query.dialog;
    
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
      }
      create(req: express.Request, res: express.Response) {

        const userId = '60041df34beb802a503876bf';
        const postData = {
          text: req.body.text,
          user: userId,
          dialog : req.body.dialog_id,
        };
        const message = new MessageModel(postData);
    
        message
          .save()
          .then((obj: any) => {
            res.json(obj);
          })
          .catch((reason: any) => {
            res.json(reason);
          });
      }
      delete(req: express.Request, res: express.Response) {
        const id = req.params.id;
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
      }
}

export default MessageController;
