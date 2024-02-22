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
        <div className='h-full w-full flex justify-center items-center'>
            <div className='w-[1000px] bg-slate-300 p-4 rounded-sm'>
                {
                    questions && <PlayCard key={questions[num]._id} index={num+1} question={questions[num].question} optionA={questions[num].optionA} optionB={questions[num].optionB} optionC={questions[num].optionC} optionD={questions[num].optionD} />
                }
                <div className='flex justify-end'>
                    {
                        questions && questions.length === num + 1 ? <button className='px-4 py-2 bg-blue-500 rounded-sm'>Submit</button> : <button onClick={() => setNum(num + 1)} className='px-4 py-2 bg-blue-500 rounded-sm'>Next</button>
                    }
                </div>
            </div>
        </div>
    )
}
