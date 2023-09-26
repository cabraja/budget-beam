import React from 'react'
import {
  Card
} from "@/components/ui/card"
import { IDashboardParams } from '@/app/actions/getGroupedExpenses'
import CalendarComponent from '@/components/dashboard/calendar/CalendarComponent'
import getIncome from '@/app/actions/getIncome'
import getExpenses from '@/app/actions/getExpenses'

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Calendar({searchParams}:OverviewProps) {

  const getIncomeData = getIncome(searchParams);
  const getExpenseData = getExpenses(searchParams);

  const [income,expenses] = await Promise.all([getIncomeData,getExpenseData]);


  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
        <Card className='col-span-3 lg:col-span-2 px-8 py-8'>
            {
              income && expenses
              ?
              <CalendarComponent startDate={searchParams.from ? new Date(searchParams.from) : null} income={income} expenses={expenses}/>
              :
              <p>Error, try later.</p>
            }
        </Card>

      </div>
    </div>
  )
}

export default Calendar