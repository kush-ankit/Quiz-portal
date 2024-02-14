"use client"

import QuestionComponent from "@/components/question/quesComp";
import { useEffect, useState } from "react";

export default function Page({ params }) {

    const [questions, setQuestions] = useState([]);

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
        }, []
    );



    return (
        <div>
            <div className="flex flex-col gap-2">
                {questions && questions.map(({ _id, question, optionA, optionB, optionC, optionD, Answer }, index) => {
                    return <QuestionComponent key={_id} num={index + 1} question={question} optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} Answer={Answer} />
                })}
            </div>
        </div>
    )
}