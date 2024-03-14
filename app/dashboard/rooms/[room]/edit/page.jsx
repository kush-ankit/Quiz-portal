"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function AddQuestion({ params }) {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [Answer, setCorrectOption] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id')

        const res = fetch(`/api/questions/edit?id=${id}`, {
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

    const getQuestions = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id')

        const res = await fetch(`/api/questions/edit?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        let data = await res.json();

        if (res.ok) {
            setQuestion(data.question);
            setOptionA(data.optionA);
            setOptionB(data.optionB);
            setOptionC(data.optionC);
            setOptionD(data.optionD);
            setCorrectOption(data.Answer);
        }

    }




    useEffect(
        () => {
            getQuestions();
        }, []
    );


    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Question</CardTitle>
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