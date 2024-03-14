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
        <Card className='' onClick={() => router.push(`/dashboard/rooms/${code}`)}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{code}</p>
            </CardContent>
        </Card>
    );
}