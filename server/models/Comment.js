import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, },
    logId: { type: objectId, ref: "Log" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
