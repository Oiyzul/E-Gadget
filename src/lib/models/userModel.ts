import { model, models, Schema } from "mongoose";
import { TUser } from "../../../types";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
    image: { type: String },
  },
  { timestamps: true }
);

const User = models?.User || model("User", userSchema);

export default User;
