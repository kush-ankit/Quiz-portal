"use client"
import RoomCard from "@/components/roomcomp/roomCard";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


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
        <div className="grid place-items-center w-full h-full">
            {data ? <div className="flex flex-col gap-4">
                <Card className='flex justify-between items-center'>
                    <CardHeader>
                        <CardTitle>Rooms</CardTitle>
                    </CardHeader>
                    <CardFooter className='grid place-items-center'>
                        <Button variant='destructive' onClick={createRoomFunction}>{createButton}</Button>
                    </CardFooter>
                </Card>
                <div className="grid grid-cols-4 gap-4">
                    {data && data.map(({ _id, name, code }) => {
                        return <RoomCard key={_id} name={name} code={code} />
                    })}
                </div>
            </div> : <div>Loading...</div>}
        </div>
    )
}