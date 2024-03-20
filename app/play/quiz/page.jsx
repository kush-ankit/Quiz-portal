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

    if (!question) {
        router.push("/");
    }

    const handleRadioChange = (e) => {
        setAns(e.target.value)
        console.log(ans);

    }

    const handleNext = () => {
        if (question[num].Answer === ans) {
            setCorrectAnswer();
            setMarks();
        } else {
            setIncorrectAnswer();
        }
        setNum(num + 1)
        setAns(null)
    }

    const handleSubmit = () => {
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
                        <CardTitle>{question[num]?.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="A" id="optionA" onClick={handleRadioChange} />
                                <Label htmlFor="optionA">{question[num]?.optionA}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="B" id="optionB" onClick={handleRadioChange} />
                                <Label htmlFor="optionB">{question[num]?.optionB}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="C" id="optionC" onClick={handleRadioChange} />
                                <Label htmlFor="optionC">{question[num]?.optionC}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="D" id="optionD" onClick={handleRadioChange} />
                                <Label htmlFor="optionD">{question[num]?.optionD}</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                    <CardFooter className='flex justify-evenly'>
                        {num < 1 ? <Button disabled >Previous</Button> : <Button onClick={(e) => setNum(num - 1)} >Previous</Button>}
                        {
                            num < question.length - 1 ?
                                <Button onClick={handleNext} >Next</Button> :
                                <Button onClick={handleSubmit}>Submit</Button>
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
