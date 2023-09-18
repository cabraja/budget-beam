import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import DashboardCard from '@/components/dashboard/DashboardCard';
import getExpenses, { IDashboardParams } from '@/app/actions/getExpenses'

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Overview({searchParams}:OverviewProps) {
  const expenses = await getExpenses(searchParams);
  const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0);

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

        <DashboardCard  amount={totalExpenses || 0}/>

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