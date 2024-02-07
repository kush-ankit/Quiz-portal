import mongoose, { Schema, models } from "mongoose";

const roomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    roomCode: {
        type: Number,
        required: true,
        unique: true,
    },
    userid: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const Room = models.Room || mongoose.model("Room", roomSchema);
export default Room;