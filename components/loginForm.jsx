"use client"
import { useState } from "react"

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleClick(e) {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required")
        }

        console.log(email);
        console.log(password);
    }

    return (
        <div className="grid place-items-center h-screen">
            <div className="bg-slate-300 rounded-md shadow-xl">
                <form className="flex flex-col gap-4 items-center p-8">
                    <h1 className="text-3xl font-bold">Login User</h1>
                    <div className="flex flex-col gap-3">
                        <input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <div className="flex flex-col">
                            <input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            {error && <span className="text-red-500 text-sm">*{error}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="px-4 py-1 bg-blue-500 w-fit rounded-md" onClick={handleClick}>Submit</button>
                            <span className="text-right text-sm">Don&apos;t have an account?<a href="#" className="underline">Register</a></span>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
