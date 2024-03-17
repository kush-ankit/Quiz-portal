import { connectMongoDB, disconnectDB } from "@/lib/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";


// check and send the room Details for player  
export async function GET(req) {
    try {
        await connectMongoDB();
        const searchParams = req.nextUrl.searchParams;
        const roomcode = searchParams.get('code');
        const questions = await Question.find({ code: roomcode });
        if (questions) {
            return NextResponse.json(questions, { status: 202 });
        } else {
            return NextResponse.json({ Message: "No questions found !!" }, { status: 406 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 405 });
    }
}