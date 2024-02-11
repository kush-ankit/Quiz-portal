import { getServerSession } from "next-auth";
import { NextResponse } from 'next/server'
import { authOptions } from "../../auth/[...nextauth]/route";
import Room from "@/models/room";

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        const rooms = await Room.find({ email: session?.user?.email });
        return NextResponse.json({ rooms }, { status: 201 });
    } catch (error) {
        console.log(error);
    }
}