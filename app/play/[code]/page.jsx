"use client"
import PlayCard from "@/components/play/playCard";
import { useEffect, useState } from "react";

export default function Page({ params }) {

    const [questions, setQuestions] = useState();
    const [num, setNum] = useState(0);

    const getQuestions = async () => {
        const res = await fetch(`/api/play/allQuestions?code=${params.code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        let quest = await res.json();
        setQuestions(quest);
    }

    useEffect(
        () => {
            getQuestions();
        }, []
    );


    return (
        <div>
            {
                questions && <PlayCard key={questions[num]._id} question={questions[num].question} optionA={questions[num].optionA} optionB={questions[num].optionB} optionC={questions[num].optionC} optionD={questions[num].optionD} />
            }
            {
                questions && questions.length === num + 1 ? <button>Submit</button> : <button onClick={() => setNum(num + 1)}>Next</button>
            }
        </div>
    )
}
