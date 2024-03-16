import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import Room from "@/models/room";
import { authOptions } from "../auth/[...nextauth]/route";
import { random } from "@/lib/random";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req) {
    try {
        await connectMongoDB();
        const session = await getServerSession(authOptions);
        const { roomName } = await req.json();
        let Roomgen = await Room.create({ name: roomName, code: random(), email: session?.user?.email })
        return NextResponse.json({ Roomgen }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const session = await getServerSession(authOptions);
        const rooms = await Room.find({ email: session?.user?.email });
        return NextResponse.json({ rooms }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}