"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";


export default function AddQuestion({ params }) {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [Answer, setCorrectOption] = useState("A")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                question,
                optionA,
                optionB,
                optionC,
                optionD,
                Answer,
                code: params.room
            })
        })
        if (res.ok) {
            router.push(`/dashboard/rooms/${params.room}`);
        } else {
            setLoading(false);
            setError(res.statusText)
        }
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Question</CardTitle>
                <CardDescription>Enter Questions and options</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className='flex flex-col gap-4'>
                    <Input value={question} type="text" placeholder="Question" onChange={(e) => setQuestion(e.target.value)} />
                    <div className="grid grid-cols-2 gap-4" >
                        
                        <Input value={optionA} type="text" placeholder="Option A" onChange={(e) => setOptionA(e.target.value)} />
                        <Input value={optionB} type="text" placeholder="Option B" onChange={(e) => setOptionB(e.target.value)} />
                        <Input value={optionC} type="text" placeholder="Option C" onChange={(e) => setOptionC(e.target.value)} />
                        <Input value={optionD} type="text" placeholder="Option D" onChange={(e) => setOptionD(e.target.value)} />
                        <Select onValueChange={(value) => setCorrectOption(value)} className="w-full">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Answer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="A" >A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                                <SelectItem value="D">D</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </CardContent>
                <CardFooter>
                    <span>{error}</span>
                    {loading ? <Button disabled>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                    </Button> : <Button type="submit" color="primary">Save Question</Button>
                    }

                </CardFooter>
            </form>
        </Card>

    )
}