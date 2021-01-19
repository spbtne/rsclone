import express from "express";
import { UserModel } from "../models/indexModels";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "60041df34beb802a503876bf" },
    { last_seen: new Date() },
    { new: true },
    () => {}
  );
  next();
};
