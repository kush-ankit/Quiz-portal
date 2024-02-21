import { connectMongoDB, disconnectDB } from "@/lib/mongodb";
import Room from "@/models/room";
import { NextResponse } from "next/server";


// check and send the room Details for player  
export async function GET(req) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const roomcode = searchParams.get('code');
        await connectMongoDB();
        const rooms = await Room.findOne({ code: roomcode });
        if (rooms) {
            return NextResponse.json({ name: rooms.name, code: rooms.code, email: rooms.email }, { status: 202 });
        } else {
            return NextResponse.json({ Message: "Room Doesn't exist !!" }, { status: 406 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 405 });
    } finally {
        await disconnectDB();
    }
}