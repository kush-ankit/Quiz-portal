import User from "@/models/user";
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { userEmail } = await req.json();
        const user = await User.findOne({ email: userEmail })
        console.log(user);
        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });

    }
}