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

export default function Page() {
    const [question] = useQuestionStore((state) => [state.question]);
    const [num, setNum] = useState(0)
    const [ans, setAns] = useState(null)

    const handleRadioChange = (e) => {
        setAns(e.target.value)
        console.log(ans);
    }

    if (question) {
        return (
            <div className="p-4">
                {ans}
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
                    <CardFooter>
                        <Button onClick={(e) => setNum(num + 1)} >Next</Button>
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
