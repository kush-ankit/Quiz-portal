import { connectMongoDB, disconnectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/models/user";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        return NextResponse.json({ name, email, password }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 400 });
    }
}