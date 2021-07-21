import { Schema, model } from "mongoose";

const carSchema = new Schema(
  {
    brand: String,
    model: String,
    price: Number,
    imgURL: String,
    number: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Car", carSchema);
