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
import { CiEdit } from "react-icons/ci";


export default function QuestionComponent({ id, num, question, optionA, optionB, optionC, optionD, Answer, code }) {

    const router = useRouter();

    return (
        <div className='w-full' >
            <Card className='bg-secondary grid grid-cols-5 p-4'>
                <div className='col-span-4'>
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
                </div>
                <div className='flex justify-end items-end'>
                    <Button onClick={() => router.push(`/dashboard/rooms/${code}/edit?id=${id}`)}><CiEdit size={25} className='font-bold' /></Button>
                </div>
            </Card>
        </div>
    )
}
