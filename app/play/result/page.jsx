import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithForm() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Card className='p-6 w-[25rem]'>
        <CardHeader>
          <CardTitle>Result</CardTitle>
          <CardDescription>This is demo result</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Total Question: 20</p>
          <p>Correct Answer: 10</p>
          <p>Wrong Answer: 10</p>
          <p>Total Marks: 50</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button>Submit</Button>
          <Button>Reset</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
