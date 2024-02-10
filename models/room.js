import mongoose, { Schema, models } from "mongoose";

const roomSchema = new Schema({
    name: {
        type: String,
    },
    code: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const Room = models.Room || mongoose.model("Room", roomSchema);
export default Room;