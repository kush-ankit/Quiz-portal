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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";



export default function AddQuestion({ params }) {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [Answer, setCorrectOption] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const res = fetch("/api/questions", {
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
        console.log(Answer);
        if (res.ok) {
            const form = e.target;
            form.reset();
        }
    }


    return (
        <Card>
            {Answer}
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
                        <Select onValueChange={(e) => setCorrectOption(e.target.value)} defaultValue={Answer}>
                            <SelectTrigger className="w-[180px]" >
                                <SelectValue placeholder="Answer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B" >B</SelectItem>
                                    <SelectItem value="C" >C</SelectItem>
                                    <SelectItem value="D">D</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" color="primary">Add & Next</Button>
                </CardFooter>
            </form>
        </Card>

    )
}