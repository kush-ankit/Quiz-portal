import mongoose, { Schema, models } from "mongoose";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    A: {
        type: String,
        required: true,
    },
    B: {
        type: String,
    },
    C: {
        type: String,
    },
    D: {
        type: String,
    },
    Ans: {
        type: String,
        required: true,
    },
    roomid: {
        type: String,
        required: true,
    }

});

const Question = models.Question || mongoose.model("Question", questionSchema);
export default Question;