"use client";

import { useRouter } from "next/navigation";

export default function RoomCard({ name, code }) {

    const router = useRouter();

    return (
        <div className="grid place-items-center" onClick={() => router.push(`/${code}`)}>
            <div className="shadow-lg bg-slate-200 flex flex-col gap-2 w-[18rem] h-[6rem] p-4">
                <span className="font-semibold">{name}</span>
                <span>{code}</span>
            </div>
        </div>
    );
}