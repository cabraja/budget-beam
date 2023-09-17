import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Overview() {
  return (
    <div className='py-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4'>
        <Card>
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-4xl font-bold'>$4381</p>
          </CardContent>
          <CardFooter>
          <CardDescription>+ 2% from last month</CardDescription>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-4xl font-bold'>$3654</p>
          </CardContent>
          <CardFooter>
          <CardDescription>+ 2% from last month</CardDescription>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-4xl font-bold text-positive'>$871</p>
          </CardContent>
          <CardFooter>
          <CardDescription>+ 2% from last month</CardDescription>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

export default Overview