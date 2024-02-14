import React from 'react'

export default function QuestionComponent({ num, question, optionA, optionB, optionC, optionD, Answer }) {
    return (
        <div className='w-full'>
            <div className='bg-gray-200 p-2'>
                <h1 className='text-xl font-semibold'>{num}. {question}</h1>
            </div>
        </div>
    )
}
