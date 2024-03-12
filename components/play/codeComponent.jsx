"use client"
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from 'next/navigation';
import { usePlayerStore } from "@/global/playerStore";
// import { useQuestionStore } from "@/global/questionStore";



export default function CodeComponent() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [player, roomName, roomEditor, roomCode, setPlayer, setRoomName, setRoomEditor, setRoomCode] = usePlayerStore((state) => [state.player, state.roomName, state.roomEditor, state.roomCode, state.setPlayer, state.setRoomName, state.setRoomEditor, state.setRoomCode]);
    // const [question, getStoreQuestion] = useQuestionStore((state) => [state.question, state.getStoreQuestion])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await getStoreQuestion(`/api/play/allQuestions?code=${code}`)
    //     if (question) {
    //         router.push('/play/quiz')
    //         console.log(question);
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/play/?code=${code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.ok) {
            let roomDetails = await res.json();
            setPlayer(playerName);
            setRoomName(roomDetails.name);
            setRoomEditor(roomDetails.email);
            setRoomCode(roomDetails.code);
            router.push('/play/quiz')
        }
    }


    return (
        <Card className="outline outline-1 p-2">
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>Enter Room Code</CardTitle>
                    <CardDescription>Play Quiz</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <Input type="text" placeholder="Player Name" onChange={(e) => setPlayerName(e.target.value)} />
                    <Input type="number" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
                </CardContent>
                <CardFooter>
                    <Button type="submit" variant="outline">Submit</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
