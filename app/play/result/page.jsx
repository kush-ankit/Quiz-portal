"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAnswerStore, usePlayerStore } from "@/global/playerStore"

export default function CardWithForm() {

  const [marks, correctAnswer, incorrectAnswer, totalQuestion] = useAnswerStore((state) => [state.marks, state.correctAnswer, state.incorrectAnswer, state.totalQuestion])
  const [player] = usePlayerStore((state) => [state.player]);

  return (
    <div className="w-full h-full grid place-items-center p-4">
      <Card className='md:p-6 p-2 md:w-[35rem] w-full text-xl shadow-lg outline outline-1'>
        <CardHeader>
          <CardTitle className='text-3xl'>Result</CardTitle>
          <CardDescription>Hi! {player} your result is here.</CardDescription>
        </CardHeader>
        <CardContent className='grid grid-cols-3'>
          <p className="col-span-2 flex justify-between"><span>Total Question</span><span>:</span> </p>
          <p className="flex justify-end">{totalQuestion}</p>
          <p className="col-span-2 flex justify-between"><span>Correct Answer</span><span>:</span></p>
          <p className="flex justify-end"> {correctAnswer} </p>
          <p className="col-span-2 flex justify-between"><span>Wrong Answer</span><span>:</span></p>
          <p className="flex justify-end">{incorrectAnswer}</p>
          <p className="col-span-2 flex justify-between"><span>Total Marks</span><span>:</span></p>
          <p className="flex justify-end">{marks}</p>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button>Reset</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
