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
        <section className="p-4 w-full h-full flex flex-col gap-4">
            <Card className='flex justify-between'>
                <CardHeader>
                    <CardTitle>{params.room}</CardTitle>
                </CardHeader>
                <div className='p-4'>
                    <Button onClick={() => router.push(`/dashboard/rooms/${params.room}/add`)}>+</Button>
                </div>
            </Card>
            <div>
                {children}
            </div>
        </section>
    )
}