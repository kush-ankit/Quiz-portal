"use client"
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default function Page() {
    const [message, setMessage] = useState("")
    let socket;

    useEffect(() => {
        socketHandler();
    }, []);

    async function socketHandler() {
        await fetch('/api/play/socket');
        socket = io();
        socket.on('receive-message', (data) => {
            console.log(data)
        })
        // socket.on('disconnect', () => {
        //     console.log('disconnected from server')
        // })
        // socket.on('message', (data) => {
        //     console.log(data)
        // })
    }

    function handlesubmit(e) {
        e.preventDefault();
        socket.emit('send-message', { message })
    }


    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input value={message} type="text" onChange={e => setMessage(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
