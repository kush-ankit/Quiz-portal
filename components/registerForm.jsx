"use client"
import { useState } from "react";

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleClick(e) {
        e.preventDefault();

        if (!email || !password || !name) {
            setError("All fields are required")
        }
        console.log(name);
        console.log(email);
        console.log(password);
    }


    return (
        <div className="grid place-items-center h-screen">
            <div className="bg-slate-300 rounded-md shadow-xl">
                <form className="flex flex-col gap-4 items-center p-8">
                    <h1 className="text-3xl font-bold">Register User</h1>
                    <div className="flex flex-col gap-3">
                        <input type="text" className="p-1 rounded-md outline-none" id="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                        <input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <div className="flex flex-col gap-1">
                            <input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            {error && <span className="text-red-500 text-sm">*{error}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="px-4 py-1 bg-blue-500 w-fit rounded-md" onClick={handleClick}>Submit</button>
                            <span className="text-right text-sm">Already have an account?<a href="#" className="underline">Login</a></span>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
