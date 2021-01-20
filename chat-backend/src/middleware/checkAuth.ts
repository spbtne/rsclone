import express from "express";
import { verifyJWTToken } from "../utils/indexUtils";
import { IUser } from "../models/User";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {

if (req.path === "/user/login" || req.path === '/user/registration') {
return next();
}

  const token = req.headers.token;


    verifyJWTToken(token)
      .then((user : any) => {
          req.user = user;      
        next();
      })
      .catch(() => {
        res.status(403).json({ message: "Invalid auth token provided." });
      });
  
};
