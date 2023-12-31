import React from 'react'
import {
  Card
} from "@/components/ui/card"
import { IDashboardParams } from '@/app/actions/getGroupedExpenses'
import CalendarComponent from '@/components/dashboard/calendar/CalendarComponent'
import getIncome from '@/app/actions/getIncome'
import getExpenses from '@/app/actions/getExpenses'
import CalendarSelectedData from '@/components/dashboard/calendar/CalendarSelectedData'
import getRates from '@/app/actions/getRates'

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Calendar({searchParams}:OverviewProps) {

  const getIncomeData = getIncome(searchParams);
  const getExpenseData = getExpenses(searchParams);
  const ratesData = getRates();

  const [income,expenses,rates] = await Promise.all([getIncomeData,getExpenseData,ratesData]);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
        <Card className='col-span-3 lg:col-span-2 lg:p-8 p-4'>
            {
              income && expenses
              ?
              <CalendarComponent rates={rates} startDate={searchParams.from ? new Date(searchParams.from) : null} income={income} expenses={expenses}/>
              :
              <p>Error, try later.</p>
            }
        </Card>

        <Card className='col-span-3 lg:col-span-1 px-8 py-8'>
            <CalendarSelectedData rates={rates}/>
        </Card>

      </div>
    </div>
  )
}

export default Calendar