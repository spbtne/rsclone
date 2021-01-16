import mongoose, { Schema } from "mongoose";
import { isEmail } from 'validator';


const UserSchema = new Schema(
  {
    email: {
      type:String,
      required: 'Email required',
      validate: [isEmail, 'Invalid e-mail']
    },
    avatar: String,
    fullname: {
      type:String,
      required: 'Full name required',
    },
    password: {
      type:String,
      required: 'Password required',
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirm_hash: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
