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
import { useQuestionStore } from "@/global/questionStore";



export default function CodeComponent() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [getStoreQuestion] = useQuestionStore((state) => [state.getStoreQuestion])
    const handleSubmit = async (e) => {
        e.preventDefault();
        await getStoreQuestion(`/api/play/allQuestions?code=${code}`)
        router.push('/play/quiz')
    }

    return (
        <div className="">
            <Card className="outline outline-1">
                <form className="flex flex-col gap-2 p-3" onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Enter Room Code</CardTitle>
                        <CardDescription>Play Quiz</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input type="number" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" variant="outline">Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div >
    )
}
