"use client"
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


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
        <div className="grid place-items-center h-[85vh]">
            <div className="bg-slate-300 rounded-md shadow-xl">
                <form className="flex flex-col gap-4 items-center p-8" onSubmit={handleClick}>
                    <h1 className="text-3xl font-bold">Login User</h1>
                    <div className="flex flex-col gap-3">
                        <input type="email" className="p-1 rounded-md outline-none" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <div className="flex flex-col">
                            <input type="password" className="p-1 rounded-md outline-none" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            {error && <span className="text-red-500 text-sm">*{error}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="px-4 py-1 bg-blue-500 w-fit rounded-md">Submit</button>
                            <span className="text-right text-sm">Don&apos;t have an account?<a href="/register" className="underline">Register</a></span>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}
