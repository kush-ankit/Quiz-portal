"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import { ModeToggle } from "../theme-button";
import { Button } from "./button";
import { usePlayerStore } from "@/global/playerStore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineMenuAlt1 } from "react-icons/hi";



export default function Navbar() {

  const { data: session } = useSession();
  const [player, roomName, roomEditor, roomCode] = usePlayerStore((state) => [state.player, state.roomName, state.roomEditor, state.roomCode]);


  return (
    <nav className="bg-primary-foreground w-full md:p-6 p-4 flex justify-between">
      <a href="/"><h1 className="text-3xl font-bold">quizee</h1></a>
      <div className="flex gap-2">
        <div className="hidden md:flex gap-2 items-center">
          <div className="grid place-items-center">{session?.user?.name}</div>
          {session && <div className="flex gap-2 items-baseline">
            <Button
              onClick={() => signOut()}
              variant="destructive"
              size="sm"
            >
              Log Out
            </Button>
          </div>}
          {!session && !player &&
            <div className="flex flex-col md:flex-row gap-2">
              <Button asChild variant='outline' size='sm'>
                <Link href={"/auth/login"}>Login</Link>
              </Button>
              <Button asChild size='sm'>
                <Link href={"/auth/register"}>Register</Link>
              </Button>
            </div>
          }
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger className='md:hidden'><HiOutlineMenuAlt1 size={40} /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='flex justify-between items-center py-4'><div>{player ? player : session?.user?.name}</div> <ModeToggle /></SheetTitle>
              <SheetDescription>
                {session && <div className="flex gap-2 items-baseline">
                  <Button
                    onClick={() => signOut()}
                    variant="destructive"
                    className='w-full md:w-fit'
                  >
                    Log Out
                  </Button>
                </div>}
                {!session && !player &&
                  <div className="flex flex-col gap-2">
                    <Button asChild variant='outline' size='sm'>
                      <Link href={"/auth/login"}>Login</Link>
                    </Button>
                    <Button asChild size='sm'>
                      <Link href={"/auth/register"}>Register</Link>
                    </Button>
                  </div>
                }
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  )
}
