'use client'
import { Rates } from "@/app/actions/getRates";
import { useCurrencyStore } from "@/app/hooks/useCurrency";
import useSelectedDay from "@/app/hooks/useSelectedDay"
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatCurrency";
import { format } from "date-fns";

interface CalendarSelectedDataProps{
    rates:Rates;
}

function CalendarSelectedData({rates}:CalendarSelectedDataProps) {
    const {currency} = useCurrencyStore();
    const selectedDay = useSelectedDay();

    const entriesNone = selectedDay.expenses.length == 0 && selectedDay.income.length == 0;
    const date = !entriesNone ? selectedDay.expenses[0]?.date || selectedDay.income[0]?.date : null;

  return (
    <aside className="w-full h-full">
        {
            entriesNone ?
            (
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center'>
                  <p className='font-bold text-lg'>No entries on this day.</p>
                  <p className='font-light text-secondary-foreground text-center'>Hint: Start adding income and expenses.</p>
                </div>
              </div>
            )
            :
            (
            <div>
                <CardTitle>{format(date || new Date(), "PP")}</CardTitle>
                
                <div className="my-8">
                    <h4 className="font-bold">Expenses</h4>
                    <ul className="">
                        {
                            selectedDay.expenses.length === 0 ?
                            <p className="font-light text-secondary-foreground">No expenses on this day.</p>
                            :
                            selectedDay.expenses.map(exp => (
                            <li key={exp.id} className="flex flex-row items-center gap-x-4 my-1">
                                <div className="rounded-full w-[10px] h-[10px]" style={{backgroundColor: exp.tag.color}}></div>
                                <p>{currency.isLeft && currency.label}{formatCurrency(exp.amount,currency.name,rates)}{!currency.isLeft && currency.label} - {exp.tag.label}</p>
                            </li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold">Income</h4>
                    <ul className="">
                        {
                            selectedDay.income.length === 0 ?
                            <p className="font-light text-secondary-foreground">No income on this day.</p>
                            :
                            selectedDay.income.map(inc => (
                            <li key={inc.id} className="flex flex-row items-center gap-x-4 my-1">
                                <div className="rounded-full w-[10px] h-[10px]" style={{backgroundColor: inc.tag.color}}></div>
                                <p>{currency.isLeft && currency.label}{formatCurrency(inc.amount,currency.name,rates)}{!currency.isLeft && currency.label} - {inc.tag.label}</p>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            )
        }
    </aside>
  )
}

export default CalendarSelectedData