import mongoose from "mongoose";

export const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/test'
const connect = async () => {
    //load the value from .env

    //check if the value exists
    if (!connectionString) {
        console.log("DB_CONNECTION_STRING is not defined in your .env file");
        return;
    }
    try {
        await mongoose.connect(connectionString)
        console.log("Database Connected");
    } catch (e) {
        console.log(e);
    }
};

export default connect;