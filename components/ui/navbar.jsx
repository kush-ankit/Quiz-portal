"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import { ModeToggle } from "../theme-button";
import { Button } from "./button";
import { usePlayerStore } from "@/global/playerStore";


export default function Navbar() {

  const { data: session } = useSession();
  const [player, roomName, roomEditor, roomCode] = usePlayerStore((state) => [state.player, state.roomName, state.roomEditor, state.roomCode]);


  return (
    <nav className="bg-primary-foreground w-full md:p-6 p-4 flex justify-between">
      <h1 className="text-3xl font-bold">quizee</h1>
      <div className="flex gap-2">
        {session && <div className="flex gap-2 items-baseline">
          <span className="font-bold">{session?.user?.name}</span>
          <Button
            onClick={() => signOut()}
            variant="destructive"
          >
            Log Out
          </Button>
        </div>}
        {!session && !player &&
          <div className="flex gap-2">
            <Button asChild variant='outline' size='sm'>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
            <Button asChild size='sm'>
              <Link href={"/auth/register"}>Register</Link>
            </Button>
          </div>
        }
        {player && <div className="grid place-items-center">
          {player}
        </div>
        }
        <ModeToggle />
      </div>
    </nav>
  )
}
