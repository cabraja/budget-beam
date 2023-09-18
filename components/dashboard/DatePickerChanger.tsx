import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

enum DateChange{
    ADD = 1,
    SUBTRACT = -1
  }

function DatePickerChanger({onChange}:{onChange:(num:number) => void}) {
  return (
    <div className='flex gap-x-2'>
        <Button variant="outline" size="icon" onClick={() => onChange(DateChange.SUBTRACT)}>
            <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={() => onChange(DateChange.ADD)}>
            <ChevronRight className="h-4 w-4" />
        </Button>
    </div>
  )
}

export default DatePickerChanger