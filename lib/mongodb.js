import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("AN error occurred while connecting to database ", error);
    }
}

export const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Database disconnected");
    } catch (error) {
        console.log("AN error occurred while disconnecting from database ", error);
    }
}