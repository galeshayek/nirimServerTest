import { Schema } from "mongoose"
import { User } from "../../@types/@types"
import uniquevalidatior from 'mongoose-unique-validator'

const userSchema = new Schema<User>({
    firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
    email: { type: String, required: true, minlength: 6, maxlength: 30, unique: true },
    phoneNumber: { type: String, required: true, minlength: 9, maxlength: 13 },
    receiveUpdates: { type: Boolean, required: true }
})

userSchema.plugin(uniquevalidatior)
export default userSchema