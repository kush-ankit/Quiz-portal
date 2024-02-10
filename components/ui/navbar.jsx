"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {

  const { data: session } = useSession();

  return (
    <nav className="bg-slate-400 w-full p-6 flex justify-between">
      <h1 className="text-3xl font-bold">quizee</h1>
      {session && <div className="flex gap-2 items-baseline">
        <span className="font-bold">{session?.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-3 py-1"
        >
          Log Out
        </button>
      </div>}
    </nav>
  )
}
