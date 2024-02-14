import React from 'react'

export default function QuestionComponent({ question, optionA, optionB, optionC, optionD, Answer }) {
    return (
        <div className='w-full p-4'>
            <div className='bg-pink-100 p-2'>
                <h1 className='text-xl font-semibold'>{question}</h1>
                
            </div>
        </div>
    )
}
