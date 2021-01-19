import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  email: string;
  fullname: string;
  password: string;
  confirmed: string;
  avatar: string;
  confirm_hash: string;
  last_seen: Date;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: "Email required",
      validate: [validator.isEmail, "Invalid e-mail"],
      unique: true,
    },
    avatar: String,
    fullname: {
      type: String,
      required: "Full name required",
    },
    password: {
      type: String,
      required: "Password required",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
