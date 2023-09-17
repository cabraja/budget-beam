import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddExpense from '@/components/dashboard/expenses/AddExpenseForm'
import getTags from '@/app/actions/getTags'

async function Expenses() {

  const tags = await getTags()

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3'>
        <Card>
            <CardHeader>
              <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <AddExpense tags={tags}/>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}

export default Expenses