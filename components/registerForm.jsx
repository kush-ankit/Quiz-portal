"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("submit");

    const router = useRouter();

    const handleClick = async (e) => {
        e.preventDefault();

        if (!email || !password || !name) {
            setError("All fields are required");
            return;
        }

        setStatus("Loading...");

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/dashboard");
            } else {
                console.log("Failed to register");
            }

        } catch (error) {
            console.log("An error occurred during registration", error);
        }
        setStatus("Submit");
    }


    return (
        <div className="grid place-items-center h-screen">
            <div className="bg-slate-300 rounded-md shadow-xl">
                <form onSubmit={handleClick} className="flex flex-col gap-4 items-center p-8">
                    <h1 className="text-3xl font-bold">Register User</h1>
                    <div className="flex flex-col gap-3">
                        <input type="text" className="p-1 rounded-md outline-none" id="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                        <input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <div className="flex flex-col gap-1">
                            <input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            {error && <span className="text-red-500 text-sm">*{error}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="px-4 py-1 bg-blue-500 w-fit rounded-md">{status}</button>
                            <span className="text-right text-sm">Already have an account?<a href="/" className="underline">Login</a></span>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
