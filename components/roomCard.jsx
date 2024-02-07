"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function RoomCardForm() {
    const { data: session } = useSession();

    return (
        <div className="grid place-items-center">
            <div className="shadow-lg p-8 bg-slate-300 flex flex-col gap-3 my-3">
                <span className="font-semibold">Quiz for GK dkjdfg jkrkgj kjdfgkj</span>
                <span>32674</span>
            </div>
        </div>
    );
}