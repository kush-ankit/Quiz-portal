"use client"

import { useRouter } from "next/navigation"
export default function RoomLayout({ children, params }) {
    const router = useRouter();
    return (
        <section className="p-8 w-full h-full flex flex-col gap-4">
            <div className="p-4 bg-slate-200 flex w-full font-semibold justify-between">
                <span>{params.room}</span>
                <button onClick={() => router.push(`/${params.room}/add`)}>Add Question</button>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}