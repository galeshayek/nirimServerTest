import User from "../db/Models/user-model";

const getAllUsers = async () => {
    const users = await User.find();
    return users
}
export default getAllUsers