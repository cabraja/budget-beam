import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DashboardCardAmount from './DashboardCardAmount';

interface DashboardCardProps{
  amount:number;
}

function DashboardCard({amount}:DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <DashboardCardAmount amount={amount}/>
      </CardContent>
      <CardFooter>
      <CardDescription>+ 2% from last month</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default DashboardCard