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
            <div>
                {questions && questions.map(({ _id, question, optionA, optionB, optionC, optionD, Answer }) => {
                    return <QuestionComponent key={_id} question={question} optionA={optionA} optionB={optionB} optionC={optionC} optionD={optionD} Answer={Answer} />
                })}
            </div>
        </div>
    )
}