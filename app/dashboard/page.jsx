"use client"
import RoomCard from "@/components/roomcomp/roomCard";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import axios from 'axios';


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
        // const roomRes = await axios.get('/api/rooms');
        // console.log(roomRes);
        // let rooms = await roomRes.json();
        // setData(rooms.rooms);
        axios.get('api/rooms')
            .then(function (response) {
                // handle success
                setData(response.data.rooms)
            })
    }

    useEffect(
        () => {
            findAllRooms();
        }
    );


    return (
        <div className=" w-full h-full p-4">
            {data ? <div className="flex flex-col gap-4">
                <Card className='flex justify-between items-center '>
                    <CardHeader>
                        <CardTitle>Rooms</CardTitle>
                    </CardHeader>
                    <div className='p-4'>
                        <Button variant='destructive' onClick={createRoomFunction}>{createButton}</Button>
                    </div>
                </Card>
                <div className="grid md:grid-cols-5 gap-4">
                    {data && data.map(({ _id, name, code }) => {
                        return <RoomCard key={_id} name={name} code={code} />
                    })}
                </div>
            </div> : <div className="flex flex-col gap-4">
                <Skeleton className="h-[80px] w-[100%] rounded-xl" />
                <div className="flex md:flex-row flex-col gap-4">
                    <Skeleton className="h-[130px] md:w-[250px] w-full rounded-xl" />
                    <Skeleton className="h-[130px] md:w-[250px] w-full rounded-xl" />
                    <Skeleton className="h-[130px] md:w-[250px] w-full rounded-xl" />
                    <Skeleton className="h-[130px] md:w-[250px] w-full rounded-xl" />
                </div>
            </div>}
        </div>
    )
}