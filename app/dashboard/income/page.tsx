import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddIncomeForm from '@/components/dashboard/income/AddIncomeForm'
import getIncomeTags from '@/app/actions/getIncomeTags'
import { IDashboardParams } from '@/app/actions/getGroupedExpenses'
import getIncome from '@/app/actions/getIncome'
import { TableType } from "@/app/types/enums"
import DataTable from '@/components/dashboard/graphs/DataTable'
import getRates from "@/app/actions/getRates"

interface OverviewProps{
  searchParams:IDashboardParams;
}

async function Income({searchParams}:OverviewProps) {

  const tagsData = await getIncomeTags()
  const getIncomeData = await getIncome(searchParams)
  const ratesData = getRates();

  const [tags,income,rates] = await Promise.all([tagsData,getIncomeData,ratesData]);

  return (
    <div className='py-6'>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
        <Card className='col-span-3 lg:col-span-1'>
            <CardHeader>
              <CardTitle>Add Income</CardTitle>
            </CardHeader>
            <CardContent>
              <AddIncomeForm rates={rates} tags={tags}/>
            </CardContent>
        </Card>

        <Card className='col-span-3 lg:col-span-2 py-4 px-2'>
          <CardContent className='h-full lg:p-6 p-0'>
            {
              income && income.length ?
              <DataTable rates={rates} data={income} type={TableType.INCOME}/>
              :
              <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center'>
                  <p className='font-bold text-lg'>No income this month.</p>
                  <p className='font-light text-secondary-foreground'>Start adding income.</p>
                </div>
              </div>
            }
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Income