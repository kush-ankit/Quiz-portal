"use client"
import QuesComponent from "@/components/play/quesComponent";
import { useQuestionStore } from "@/global/questionStore";

export default function Page() {
    const [question] = useQuestionStore((state) => [state.question]);
    console.log(question);
    return (
        question &&
        <div className='p-4'>
            <QuesComponent question={question[0].question} optionA={question[0].optionA} optionB={question[0].optionB} optionC={question[0].optionC} optionD={question[0].optionD} />
        </div>
    )
}
