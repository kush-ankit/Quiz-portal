"use client"
import RoomCard from "@/components/roomcomp/roomCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [data, setData] = useState();
    const [createButton, setCreateButton] = useState("Create Room");

    const { data: session } = useSession();

    const createRoomFunction = async () => {
        if (session) {
            setCreateButton("Processing...");
            const roomName = prompt("Enter room name:-");
            if (roomName) {
                const res = await fetch("/api/rooms", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        roomName: roomName,
                    })
                });
                if (res.ok) {
                    setCreateButton("Create Room");
                } else setCreateButton("error");
                findAllRooms();
            }
            setCreateButton("Create Room");
        } else alert("Please login first");
    }

    const findAllRooms = async () => {
        const roomRes = await fetch("/api/rooms", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        let rooms = await roomRes.json();
        setData(rooms.rooms);
    }

    useEffect(
        () => {
            findAllRooms();
        }, []
    );


    return (
        <div className="grid place-items-center w-full  p-8">
            {data ? <div className="flex flex-col gap-4">
                <div className="flex justify-between p-4 bg-slate-200">
                    <h1 className="text-3xl font-bold">Rooms:-</h1>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={createRoomFunction}>{createButton}</button>
                </div>
                {/* <button onClick={findAllRooms}>click</button> */}
                <div className="grid grid-cols-4 gap-4">
                    {data && data.map(({ _id, name, code }) => {
                        return <RoomCard key={_id} name={name} code={code} />
                    })}
                </div>
            </div> : <div>Loading...</div>}
        </div>
    )
}