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

        if (res.ok) {
            const form = e.target;
            form.reset();
        }
    }


    return (
        // <div className="flex flex-col w-full h-[80vh] bg-gray-300 rounded-lg p-4">
        //     <h1 className="text-4xl p-4 font-bold">Add Question</h1>
        //     <form className="flex flex-col gap-4 md:w-[40%] p-4" onSubmit={handleSubmit} >
        //         <input value={question} type="text" label="Question" onChange={(e) => setQuestion(e.target.value)} />
        //         <div className="grid grid-cols-2 gap-4" >
        //             <input value={optionA} type="text" label="Option A" onChange={(e) => setOptionA(e.target.value)} />
        //             <input value={optionB} type="text" label="Option B" onChange={(e) => setOptionB(e.target.value)} />
        //             <input value={optionC} type="text" label="Option C" onChange={(e) => setOptionC(e.target.value)} />
        //             <input value={optionD} type="text" label="Option D" onChange={(e) => setOptionD(e.target.value)} />
        //             <input value={Answer} type="text" label="Correct Option" onChange={(e) => setCorrectOption(e.target.value)} />
        //         </div>
        //         <button type="submit" color="primary">Add & Next</button>
        //     </form>
        // </div>
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
                        <Input value={Answer} type="text" placeholder="Correct Option" onChange={(e) => setCorrectOption(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" color="primary">Add & Next</Button>
                </CardFooter>
            </form>
        </Card>

    )
}