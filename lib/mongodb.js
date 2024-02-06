import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("AN error occurred while connecting to database ", error);
    }
}