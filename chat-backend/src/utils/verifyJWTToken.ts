import jwt from "jsonwebtoken";


export default (token: any) =>
  new Promise((resolve, reject) => {
    console.log(123);
    jwt.verify(token, process.env.JWT_SECRET || "", (err: any, decodedData: any) => {
      if (err || !decodedData) {
        return reject(err);
      }
      resolve(decodedData);
    });
  });
