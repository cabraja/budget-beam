import React from 'react'
import DashboardCard from '@/components/dashboard/DashboardCard';
import getExpenses, { IDashboardParams } from '@/app/actions/getExpenses'
import getIncome from '@/app/actions/getIncome';
import getGroupedExpenses from '@/app/actions/getGroupedExpenses';
import OverviewGraph from '@/components/dashboard/graphs/OverviewGraph';
import Separator from '@/components/ui/custom/Separator';

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Overview({searchParams}:OverviewProps) {
  const expenses = await getExpenses(searchParams);
  const totalExpenses = expenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  const income = await getIncome(searchParams);
  const totalIncome = income?.reduce((acc,curr) =>  acc + curr.amount, 0) || 0;
  
  const groupedExpenses = await getGroupedExpenses(searchParams);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4'>
        <DashboardCard title='Total Income' amount={totalIncome || 0}/>

        <DashboardCard title='Total Expenses' amount={totalExpenses || 0}/>

        <DashboardCard title='Net Difference' changeColor={true} amount={totalIncome - totalExpenses}/>
      </div>
      <Separator num={4}/>

      <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
        <div className='col-span-2'>
          <OverviewGraph data={groupedExpenses}/>
        </div>
      </div>
    </div>
  )
}

export default Overview