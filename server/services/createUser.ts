import User from "../db/Models/user-model"

export const createUser = (data) => {
    const user = new User(data);
    return user.save()
}
