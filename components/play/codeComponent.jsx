"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function CodeComponent() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/play?code=${code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        if (res.ok) {
            router.push(`/play/${data.code}`)
        }
    }

    return (
        <div className="">
            <Card className="outline outline-1">
                <form className="flex flex-col gap-2 p-3" onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Enter Room Code</CardTitle>
                        <CardDescription>Play Quiz</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input type="number" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" variant="outline">Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div >
    )
}
