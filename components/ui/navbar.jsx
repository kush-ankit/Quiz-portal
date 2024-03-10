"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import { ModeToggle } from "../theme-button";
import { Button } from "./button";


export default function Navbar() {

  const { data: session } = useSession();

  return (
    <nav className="bg-primary-foreground w-full md:p-6 p-4 flex justify-between">
      <h1 className="text-3xl font-bold">quizee</h1>
      {session && <div className="flex gap-2 items-baseline">
        <span className="font-bold">{session?.user?.name}</span>
        <Button
          onClick={() => signOut()}
          variant="destructive"
        >
          Log Out
        </Button>
      </div>}
      {!session &&
        <div className="flex gap-2">
          <Button asChild variant='outline' size='sm'>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button asChild size='sm'>
            <Link href={"/register"}>Register</Link>
          </Button>
          <ModeToggle />
        </div>
      }

    </nav>
  )
}
