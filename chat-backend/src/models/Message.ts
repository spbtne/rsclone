import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IMessage extends Document {
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: Boolean;
  };
  text: {
    type: string;
    require: Boolean;
  };
  user: {
    type: Schema.Types.ObjectId;
    ref: "User";
    require: true;
  };
  unread: {
    type: Boolean;
    default: boolean;
  };
}

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      require: Boolean,
    },
    dialog: {
      type: Schema.Types.ObjectId,
      ref: "Dialog",
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    unread: {
      type: Boolean,
      default: false,
    },
    // attachments:
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
