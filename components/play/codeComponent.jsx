"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CodeComponent() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/play?code=${code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        if (res.ok) {
            router.push(`/play/${data.code}`)
        }
    }

    return (
        <div className="w-[20rem] bg-slate-300 flex flex-col gap-4 outline outline-[3px]">
            <h1 className="font-bold text-2xl border-b-[3px] border-black p-3">Enter Code</h1>
            <form className="flex flex-col gap-4 p-3" onSubmit={handleSubmit}>
                <input type="number" className="p-2 outline-none bg-white" onChange={(e) => setCode(e.target.value)} />
                <button type="submit" className="px-4 py-2 outline outline-2 bg-white" >Submit</button>
            </form>
        </div>
    )
}
