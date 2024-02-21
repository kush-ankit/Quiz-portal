import { Server } from 'socket.io';
import { NextResponse } from "next/server";


export async function GET(req) {
    const io = new Server(NextResponse.socket.Server);
    NextResponse.socket.Server.io = io;

    io.on('connection', (socket) => {
        socket.on('send-message', (obj) => {
            io.on('receive-message', obj);
        });
    });

    console.log("socket set");
    NextResponse.end();
}