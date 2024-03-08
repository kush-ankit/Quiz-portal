"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


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

            const userRes = await fetch("api/user/exist", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
            })
            const { user } = await userRes.json();
            if (user) {
                setError("User already exists");
                setStatus("Submit");
                return;
            }


            const res = await fetch('/api/user/register', {
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
        <div className="grid place-items-center">
            <Card className='w-[20rem]'>
                <form onSubmit={handleClick}>
                    <CardHeader>
                        <CardTitle>Register User</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            <Input type="text" className="p-1 rounded-md outline-none" id="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                            <Input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            <div className="flex flex-col gap-1">
                                <Input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                {error && <span className="text-red-500 text-sm">*{error}</span>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <Button type="submit" variant="outline">{status}</Button>
                        <span className="text-right text-sm">Already have an account?<a href="/login" className="underline">Login</a></span>
                    </CardFooter>
                </form>
            </Card>

        </div >
    )
}
