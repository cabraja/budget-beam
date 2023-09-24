import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddIncomeForm from '@/components/dashboard/income/AddIncomeForm'
import getIncomeTags from '@/app/actions/getIncomeTags'

async function Income() {

  const tags = await getIncomeTags()

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3'>
        <Card className='col-span-3 lg:col-span-1'>
            <CardHeader>
              <CardTitle>Add Income</CardTitle>
            </CardHeader>
            <CardContent>
              <AddIncomeForm tags={tags}/>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}

export default Income