import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const Log = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, },
    shipId: { type: objectId, ref: "Ship" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;
