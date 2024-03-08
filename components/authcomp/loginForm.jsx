"use client"
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Input } from "../ui/input";



export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();


    const handleClick = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="grid place-items-center">
            <Card className=" w-[20rem]">
                <form onSubmit={handleClick}>
                    <CardHeader>
                        <CardTitle>Login User</CardTitle>
                        <CardDescription>Enter Credentials to login</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            <Input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            <div className="flex flex-col">
                                <Input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                {error && <span className="text-red-500 text-sm">*{error}</span>}
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <Button variant="outline" type='submit'>Submit</Button>
                        <span className="text-right text-sm">Don&apos;t have an account?<a href="/register" className="underline">Register</a></span>
                    </CardFooter>
                </form>
            </Card>

        </div >
    )
}
