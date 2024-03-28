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
import { useQuestionStore } from "@/global/questionStore";



export default function CodeComponent() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [error, setError] = useState();
    const [setPlayer, setRoomName, setRoomEditor, setRoomCode] = usePlayerStore((state) => [state.setPlayer, state.setRoomName, state.setRoomEditor, state.setRoomCode]);
    const [getStoreQuestion] = useQuestionStore((state) => [state.getStoreQuestion])

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
            getStoreQuestion(`/api/play/allQuestions?code=${code}`)
            router.push('/play/quiz')
        }
        else {
            setError(res.statusText);
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
                <CardFooter className='flex flex-col text-left'>
                    <span className="text-sm text-red-500">{error && error}</span>
                    <Button type="submit" variant="outline">Submit</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
