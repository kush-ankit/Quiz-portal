"use client"
import LoginForm from "@/components/authcomp/loginForm";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
    const router = new useRouter();
    const { data: session } = useSession();
    if (session) router.push("/dashboard");

    return (
        <main className="w-full h-full grid place-items-center">
            <div>
                <LoginForm />
            </div>
        </main>
    )
}
