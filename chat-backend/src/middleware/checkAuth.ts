import express from "express";
import { verifyJWTToken } from "../utils/indexUtils";
import { IUser } from "../models/User";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token: string | null =
    "token" in req.headers ? (req.headers.token as string) : null;

  if (token) {
    verifyJWTToken(token)
      .then((user : any) => {
        if (user) {
          req.user = user;
        }
        next();
      })
      .catch(() => {
        res.status(403).json({ message: "Invalid auth token provided." });
      });
  }
};
