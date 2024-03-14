import { useRouter } from 'next/navigation'
import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button';


export default function QuestionComponent({ id, num, question, optionA, optionB, optionC, optionD, Answer, code }) {

    const router = useRouter();

    return (
        <div className='w-full' >
            <Card className='bg-secondary'>
                <CardHeader>
                    <CardTitle>{num}. {question}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>A. {optionA}</p>
                    <p>B. {optionB}</p>
                    <p>C. {optionC}</p>
                    <p>D. {optionD}</p>
                    <p>Answer. {Answer}</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => router.push(`/dashboard/rooms/${code}/edit?id=${id}`)}>Edit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
