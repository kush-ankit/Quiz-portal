"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useRouter } from "next/navigation";

export default function RoomCard({ name, code }) {

    const router = useRouter();

    return (
        <div className="grid place-items-center" onClick={() => router.push(`/rooms/${code}`)}>
            <Card className='w-[18rem]'>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{code}</p>
                </CardContent>
            </Card>

        </div>
    );
}