import React from 'react'
import DashboardCard from '@/components/dashboard/DashboardCard';
import { IDashboardParams } from '@/app/actions/getGroupedExpenses';
import getGroupedExpenses from '@/app/actions/getGroupedExpenses';
import OverviewGraph from '@/components/dashboard/graphs/OverviewGraph';
import Separator from '@/components/ui/custom/Separator';
import OverviewPieChart from '@/components/dashboard/graphs/OverviewPieChart';
import getGroupedIncome from '@/app/actions/getGroupedIncome';
import getTotalData from '@/app/actions/getTotalData';

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Overview({searchParams}:OverviewProps) {
  const totalData = getTotalData(searchParams);
  const groupedExpensesData = getGroupedExpenses(searchParams);
  const groupedIncomeData = getGroupedIncome(searchParams);

  const [total,groupedExpenses,groupedIncome] = await Promise.all([totalData,groupedExpensesData,groupedIncomeData]);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4'>
        <DashboardCard title='Total Income' amount={total?.income || 0}/>

        <DashboardCard title='Total Expenses' amount={total?.expense || 0}/>

        <DashboardCard title='Net Difference' changeColor={true} amount={(total?.income || 0) - (total?.expense || 0)}/>
      </div>
      <Separator num={4}/>

      <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
        <div className='lg:col-span-2 col-span-3 flex flex-col lg:h-full'>
          <div className='flex-grow h-full'>
            {
              groupedExpenses ?
              <OverviewGraph data={groupedExpenses}/>
              :
              (
              <div className='w-full px-4 h-[80%] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <p className='font-bold'>No expenses this month.</p>
                    <p className='font-light text-secondary-foreground text-center'>Start adding expenses in the expense tab.</p>
                </div>
              </div>
              )
            }
          </div>
        </div>

        <div className='lg:col-span-1 col-span-3 flex flex-col h-full'>
         <div className='flex-grow h-full'>
          {
            groupedIncome ?
            <OverviewPieChart data={groupedIncome}/>
            :
            (
              <div className='w-full px-4 h-[80%] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <p className='font-bold'>No income this month.</p>
                    <p className='font-light text-secondary-foreground text-center'>Start adding income in the income tab.</p>
                </div>
            </div>
            )
          }
         </div>
        </div>
      </div>
    </div>
  )
}

export default Overview