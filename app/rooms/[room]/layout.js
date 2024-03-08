"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
export default function RoomLayout({ children, params }) {
    const router = useRouter();
    return (
        <section className="p-8 w-full h-full flex flex-col gap-4">
            <Card className='flex justify-between'>
                <CardHeader>
                    <CardTitle>Code-{params.room}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <Button onClick={() => router.push(`/rooms/${params.room}/add`)}>+</Button>
                </CardFooter>
            </Card>
            <div>
                {children}
            </div>
        </section>
    )
}