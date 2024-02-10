"use client"

import React, { useState } from 'react'

export default function RoomCodeForm() {

    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();

        if (!code) {
            setError("All fields are required");
            return;
        }    
    }


    return (
        <div className='grid place-items-center'>
            <div className='bg-slate-300 p-8 rounded-md'>
                <h1 className="text-3xl font-bold text-center">Play Quiz</h1>
                <form className="flex flex-col gap-4 py-2" onSubmit={handleClick}>
                    <div className="flex flex-col gap-3">
                        <input type="number" className="p-1 rounded-md outline-none" id="roomCode" placeholder="Room Code" onChange={e => setCode(e.target.value)} />
                    </div>
                    {error && <span className="text-red-500 text-sm">*{error}</span>}
                    <div className="flex flex-col gap-1">
                        <button type="submit" className="px-4 py-1 bg-blue-500 w-fit rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
