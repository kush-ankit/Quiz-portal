import mongoose, { Schema, models } from "mongoose";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    optionA: {
        type: String,
    },
    optionB: {
        type: String,
    },
    optionC: {
        type: String,
    },
    optionD: {
        type: String,
    },
    Answer: {
        type: String,
    },
    code : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }

});

const Question = models.Question || mongoose.model("Question", questionSchema);
export default Question;