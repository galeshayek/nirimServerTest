import { model } from "mongoose";
import userSchema from "../Schemas/user-schema";

const User = model('user', userSchema);
export default User