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
import DataTable from '@/components/dashboard/graphs/DataTable'

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Expenses({searchParams}:OverviewProps) {

  const tagsData = getExpensesTags();
  const expensesData = getExpenses(searchParams);

  const [tags,expenses] = await Promise.all([tagsData,expensesData]);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10'>
        <Card className='col-span-3 lg:col-span-1'>
            <CardHeader>
              <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <AddExpense tags={tags}/>
            </CardContent>
        </Card>

        <Card className='col-span-3 lg:col-span-2 py-4 px-2'>
          <CardContent className='h-full'>
            {
              expenses && expenses.length ?
              <DataTable data={expenses}/>
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