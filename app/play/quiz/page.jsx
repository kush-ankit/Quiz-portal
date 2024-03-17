"use client"
import { useQuestionStore } from "@/global/questionStore";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAnswerStore } from "@/global/playerStore";
import { useRouter } from "next/navigation";

export default function Page() {
    const [question] = useQuestionStore((state) => [state.question]);
    const [setMarks, setCorrectAnswer, setIncorrectAnswer] = useAnswerStore((state) => [state.setMarks, state.setCorrectAnswer, state.setIncorrectAnswer]);
    const router = useRouter();
    const [num, setNum] = useState(0)
    const [ans, setAns] = useState(null)


    const handleRadioChange = (e) => {
        setAns(e.target.value)
        console.log(ans);

    }

    const handleSubmit = () => {
        if (question[num].Answer === ans) {
            setCorrectAnswer();
            setMarks();
        } else {
            setIncorrectAnswer();
        }
        setNum(num + 1)
    }

    const handlelastSubmit = () => {
        if (question[num].Answer === ans) {
            setCorrectAnswer();
            setMarks();
        } else {
            setIncorrectAnswer();
        }
        router.push('/play/result')
    }

    if (question) {
        return (
            <div className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>{question[num].question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question[num].optionA} id="r1" onClick={handleRadioChange} />
                                <Label htmlFor="r1">{question[num].optionA}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question[num].optionB} id="r2" onClick={handleRadioChange} />
                                <Label htmlFor="r2">{question[num].optionB}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question[num].optionC} id="r3" onClick={handleRadioChange} />
                                <Label htmlFor="r3">{question[num].optionC}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question[num].optionD} id="r4" onClick={handleRadioChange} />
                                <Label htmlFor="r4">{question[num].optionD}</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                    <CardFooter className='flex justify-evenly'>
                        <Button onClick={(e) => setNum(num - 1)} >Prev</Button>
                        {
                            num < question.length - 1 ?
                                <Button onClick={handleSubmit} >Next</Button> :
                                <Button onClick={handlelastSubmit}>Submit</Button>
                        }
                    </CardFooter>
                </Card>
            </div>
        )
    } else {
        return (
            <div className='p-4'>
                <h1>Loading...</h1>
            </div>
        )
    }
}
