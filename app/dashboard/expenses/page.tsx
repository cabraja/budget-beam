import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddExpense from '@/components/dashboard/expenses/AddExpenseForm'
import getExpensesTags from '@/app/actions/getExpenseTags'
import { IDashboardParams } from '@/app/actions/getGroupedExpenses'
import getExpenses from '@/app/actions/getExpenses'
import { TableType } from '@/app/types/enums'
import DataTable from '@/components/dashboard/graphs/DataTable'
import getRates from '@/app/actions/getRates'

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Expenses({searchParams}:OverviewProps) {

  const tagsData = getExpensesTags();
  const expensesData = getExpenses(searchParams);
  const ratesData = getRates();

  const [tags,expenses,rates] = await Promise.all([tagsData,expensesData,ratesData]);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
        <Card className='col-span-3 lg:col-span-1'>
            <CardHeader>
              <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <AddExpense rates={rates} tags={tags}/>
            </CardContent>
        </Card>

        <Card className='col-span-3 lg:col-span-2 py-4 px-2'>
          <CardContent className='h-full lg:p-6 p-0'>
            {
              expenses && expenses.length ?
              <DataTable rates={rates} data={expenses} type={TableType.EXPENSES}/>
              :
              <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center'>
                  <p className='font-bold text-lg'>No expenses this month.</p>
                  <p className='font-light text-secondary-foreground'>Start adding expenses.</p>
                </div>
              </div>
            }
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Expenses