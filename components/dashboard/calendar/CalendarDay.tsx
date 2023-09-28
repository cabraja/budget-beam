'use client'
import { DataEntry } from "./CalendarComponent";
import useSelectedDay from "@/app/hooks/useSelectedDay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface CalendarDayProps{
    day:number;
    income:DataEntry[] | null;
    expense:DataEntry[] | null;
}

function CalendarDay({day,income,expense}:CalendarDayProps) {

  const selectedDay = useSelectedDay()

   let incomeTotal = 0;
    if(income && income?.length > 0){
        incomeTotal = income.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.amount;
          }, 0) 
    }

    let expenseTotal = 0;
    if(expense && expense?.length > 0){
        expenseTotal = expense.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.amount;
          }, 0) 
    }

    const diff = incomeTotal - expenseTotal;

  return (
    <Popover>
      <PopoverTrigger>
        <div onClick={() => selectedDay.onChange(income || [], expense || [])} className={`
        rounded-full
        aspect-square
        cursor-pointer 
        flex 
        items-center 
        justify-center
        transition
        hover:opacity-50
        ${diff > 0 && 'bg-positive-muted'}
        ${diff < 0 && 'bg-destructive-muted'}
        ${(diff === 0) && (incomeTotal || expenseTotal) && 'bg-secondary'}
        border
        `}
        >
          <p className="text-sm lg:text-lg">{day}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          <li>Total Income: {incomeTotal}$</li>
          <li>Total Expenses: {expenseTotal}$</li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}

export default CalendarDay