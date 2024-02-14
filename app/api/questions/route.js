import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import Question from "@/models/question";


export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        const searchParams = req.nextUrl.searchParams
        const query = searchParams.get('code')
        const rooms = await Question.find({ email: session?.user?.email, code: query });
        console.log(rooms);
        return NextResponse.json( rooms , { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        console.log(session);
        if (session) {
            const { question, optionA, optionB, optionC, optionD, Answer, code } = await req.json();
            let ques = await Question.create({ question, code, email: session?.user?.email, optionA, optionB, optionC, optionD, Answer });
            return NextResponse.json({ ques }, { status: 201 })
        } else {
            return NextResponse.json({ error: "You are not logged in" }, { status: 401 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}