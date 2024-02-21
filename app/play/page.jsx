import CodeComponent from '@/components/play/codeComponent'
import React from 'react'

export default function Page() {
    return (
        <div className='w-full h-full grid place-items-center'>
            <div className='w-fit h-fit'>
                <CodeComponent />
            </div>
        </div>
    )
}
