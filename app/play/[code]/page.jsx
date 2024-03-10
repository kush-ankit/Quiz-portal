"use client"
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Page({ params }) {

    const [questions, setQuestions] = useState();
    const [num, setNum] = useState(0);

    const getQuestions = async () => {
        const res = await fetch(`/api/play/allQuestions?code=${params.code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        let quest = await res.json();
        setQuestions(quest);
    }

    useEffect(
        () => {
            getQuestions();
        }, []
    );


    return (
        <div className='p-4'>
            <Card className=''>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Comfortable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}
