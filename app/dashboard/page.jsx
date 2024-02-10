"use client"

import RoomCardForm from "@/components/roomcomp/roomCard";
import { useSession } from "next-auth/react";

export default function Dashboard() {

    const { data: session } = useSession();

    const call = async () => {
        if (session) {
            const res = await fetch("/api/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userEmail: session?.user?.email
                })
            });
            console.log( await res.json());
        }
    }

    call();

    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <div className="">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Rooms</h1>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">Create new Room</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
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
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                </div>
            </div>

        </div>
    )
}