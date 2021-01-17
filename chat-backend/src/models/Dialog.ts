import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IDialog extends Document {
  author: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
  partner: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
  messages: [
    {
      type: Schema.Types.ObjectId;
      ref: string;
    }
  ];
}

const DialogSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    messages: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
