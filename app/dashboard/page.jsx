"use client"

import RoomCardForm from "@/components/roomcomp/roomCard";
import { useSession } from "next-auth/react";

export default function Dashboard() {

    const { data: session } = useSession();

    const call = async () => {
        if (session) {
            const res = await fetch("/api/rooms/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    roomName : "room is the name"
                })
            });
            console.log(await res.json());
        }
    }


    return (
        <div className="grid place-items-center w-full p-8">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between p-4 bg-slate-200">
                    <h1 className="text-3xl font-bold">Rooms:-</h1>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={call}>Create new Room</button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />

                </div>
            </div>

        </div>
    )
}