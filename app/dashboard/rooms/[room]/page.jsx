"use client"

import QuestionComponent from "@/components/question/quesComp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const { data: session } = useSession();
    const [questions, setQuestions] = useState([]);
    const router = useRouter();
    if (!session) {
        router.push('/')
    }

    const getQuestions = async () => {
        const res = await fetch(`/api/questions?code=${params.room}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        let quest = await res.json();
        console.log(quest);
        setQuestions(quest);
    }

    useEffect(
        () => {
            getQuestions();
        },[]
    );



    return (
        <div>
            <div className="flex flex-col gap-2">
                {questions && questions.map(({ _id, question, optionA, optionB, optionC, optionD, Answer }, index) => {
                    return <QuestionComponent key={_id} id={_id} num={index + 1} question={question} optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} Answer={Answer} code={params.room} />
                })}
            </div>
        </div>
    )
}