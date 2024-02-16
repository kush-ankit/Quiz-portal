import { useRouter } from 'next/navigation'
import React from 'react'

export default function QuestionComponent({ id, num, question, optionA, optionB, optionC, optionD, Answer, code }) {

    const router = useRouter();

    return (
        <div className='w-full' onClick={() => router.push(`/rooms/${code}/edit?id=${id}`)}>
            <div className='bg-gray-200 p-2'>
                <h1 className='text-xl font-semibold'>{num}. {question}</h1>
            </div>
        </div>
    )
}
