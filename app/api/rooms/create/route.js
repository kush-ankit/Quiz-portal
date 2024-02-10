import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { NextResponse } from 'next/server'
import { random } from "@/lib/random";
import Room from "@/models/room";

export async function POST(req) {
    const { roomName } = await req.json();
    const session = await getServerSession(authOptions);
    let Roomgen = await Room.create({ name: roomName, code: random(), email: session?.user?.email })
    return NextResponse.json({ Roomgen }, { status: 201 })
}